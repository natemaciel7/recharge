import * as phonesRepository from "../repositories/phonesRepository";
import { Phone } from "../protocols/phone";

type PhoneInput = Omit<Phone, "id"> & { name: string; document: string };

export async function createPhone(data: PhoneInput) {
  const { document, name, number, description, carrierId } = data;

  const existingPhone = await phonesRepository.findPhoneByNumber(number);
  if (existingPhone)
    throw { type: "conflict", message: "Número já cadastrado" };

  let client = await phonesRepository.findClientByDocument(document);
  if (!client) {
    client = await phonesRepository.createClient({ name, document });
  }

  const phones = await phonesRepository.findPhonesByClientId(client.id);
  if (phones.length >= 3) {
    throw {
      type: "conflict",
      message: "Limite de 3 telefones atingido para esse cliente",
    };
  }

  const phone = await phonesRepository.createPhone({
    number,
    description,
    carrierId,
    clientId: client.id,
  });

  return phone;
}

export async function getPhonesByDocument(document: string) {
  const client = await phonesRepository.findClientByDocument(document);
  if (!client) return [];

  const phones = await phonesRepository.findPhonesByClientId(client.id);
  return phones;
}
