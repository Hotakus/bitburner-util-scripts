/** @param {NS} ns */
export async function main(ns) {
  while (true) {

    let server_name = ns.args[0]
    let hack_threads = Number(1)
    
    // check and increace the amount of money in server
    let money_friction = 3/5
    let server_max_money = await ns.getServerMaxMoney(server_name)
    let server_left_money = await ns.getServerMoneyAvailable(server_name)
    let server_money_goal = server_max_money * money_friction
    while (server_left_money < server_money_goal) {
        await ns.grow(server_name)
        server_left_money = await ns.getServerMoneyAvailable(server_name)
    }

    // check and decreace the security of designated server
    let weaken_effect = await ns.weakenAnalyze(hack_threads) * 5
    while (await ns.getServerSecurityLevel(server_name) >= 1.0 + weaken_effect) {
      await ns.weaken(server_name)
    }

    let earnedMoney = await ns.hack(server_name);
  }
}