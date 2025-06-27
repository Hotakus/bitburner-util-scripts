/** @param {NS} ns */
export async function main(ns) {
    // let server_name = ns.args[0]
    let server_list = ["foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym"]

    for (var i = 0; i < server_list.length; i++) {
        while (await ns.getServerSecurityLevel(server_list[i]) > await ns.getServerMinSecurityLevel(server_list[i])) {
            await ns.weaken(server_list[i])
        }
    }
}
