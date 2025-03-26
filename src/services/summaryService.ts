import * as phonesRepository from "../repositories/phonesRepository";
import * as rechargesRepository from "../repositories/rechargesRepository";
import * as carriersRepository from "../repositories/carrierRepository";

export async function getSummaryByDocument(document: string) {
  const client = await phonesRepository.findClientByDocument(document);
  if (!client) return { document, phones: [] };

  const phones = await phonesRepository.findPhonesByClientId(client.id);

  const enrichedPhones = await Promise.all(
    phones.map(async (phone) => {
      const carrier = await carriersRepository.findCarrierById(phone.carrierId);
      const recharges = await rechargesRepository.findRechargesByPhoneId(
        phone.id
      );
      return {
        ...phone,
        carrier,
        recharges,
      };
    })
  );

  return {
    document,
    phones: enrichedPhones,
  };
}
