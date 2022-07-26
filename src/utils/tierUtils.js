import TIERS from "../constants/tiers"

export const getCurrentTier = (tokens) => {
	const numOwned = tokens.length
	const tiersPassed = TIERS.filter(t => t.req <= numOwned)
	return tiersPassed[tiersPassed.length - 1]
}

export const getNextTier = (tokens) => {
	const numOwned = tokens.length
	const tiersUnpassed = TIERS.filter(t => numOwned < t.req)
	return tiersUnpassed.length > 0 ? tiersUnpassed[0] : null
}