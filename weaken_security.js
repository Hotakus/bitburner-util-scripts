/** @param {NS} ns */
export async function main(ns) {
    let server_name = ns.args[0]
    let weaken_effect = await ns.weakenAnalyze(Number(1)) * 5
    while (await ns.getServerSecurityLevel(server_name) >= 1.0 + weaken_effect) {
      await ns.weaken(server_name)
    }
}