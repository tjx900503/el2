/**
 * cron: 0 22 * * *
 * 推送 wxpush，要求 cookie 里面有 wxUid,如'unb=xxx;cookie2=xxxUSERID=xx;SID=xxx;wxUid=xx;'
 */
const $new('饿了么账号有效性检测')
const {
    getEnvsByName
    DisableCk
    EnableCk
    updateEnv
    updateEnv11
    getEnvByUserId
}require("./ql")

const {
    wait
    checkCk
    validateCarmeWithType
    invalidCookieNotify
    getUserInfo
    runOne
    getCookieMap
}require("./common.js")

const _0x11f78erequire("moment")

function _0x543ec4(_0x3fdeea_0x4dabab) {
    returnfloor(random()(1))
}

function _0x389941(_0x1daaab) {
    let _0x59299c""

    for (let [_0x7cf76_0x5050e8] of) {
"="";"
    }

    return
}

async function _0x179175(datacontextoptions) {
    let responseDataawait runOne()

    if () {
        if (code3000) {
            let parsedDataparse()
            const cookiescookies
            let cookie2null
            let unbnull
            for (const cookie of) {
                const cookie2Matchmatch(/cookie2=([^;]+)/)
                if () {
[1]
                }
                const unbMatchmatch(/unb=([^;]+)/)
                if () {
[1]
                }
                if () {
                    break
                }
            }

            const expiryTimestampexpires
            const expiryDate_0x11f78e(1000)format("YYYY-MM-DD HH:mm:ss")

            let cookieMapgetCookieMap()
            let extraMapparse()

            for (let item of extraMap) {
                if (item.name === "SID") {
                    break;
                }
            }

            let updatedContext = await runOne(context, cookieMap.get("SID"));

            if (!updatedContext) {
                return;
            }

            cookieMap.set('cookie2', cookie2);

            let updatedEnvironment = _0x389941(cookieMap);

            if (data.id) {
                await updateEnv11(updatedEnvironment, data.id, data.remarks);
            } else {
                await updateEnv(updatedEnvironment, data._id, data.remarks);
            }

            let userID = cookieMap.get("USERID");
            let userEnvironment = await getEnvByUserId(userID);

            

            let successMessage = "刷新成功: " + expiryDate;

            console.log(successMessage);
            return successMessage;
        } else {
            if (responseData.message) {
                console.log(responseData.message);
            } else {
                console.log(response.ret[0]);
            }

            return null;
        }
    }
}



(async function _0x1f3fe2() {
    const aleo = process.env.ELE_CARME;
    await validateCarmeWithType(aleo, 1);
    const pragati = await getEnvsByName("elmck");
    for (let mackala = 0; mackala < pragati.length; mackala++) {
        let athel = pragati[mackala].value;
        if (!athel) {
            console.log(" ❌无效用户信息, 请重新获取ck");
        } else {
            try {
                var houda = 0;
                if (pragati[mackala]._id) {
                    houda = pragati[mackala]._id;
                }
                if (pragati[mackala].id) {
                    houda = pragati[mackala].id;
                }
                athel = athel.replace(/\s/g, "");
                let lavante = await checkCk(athel, mackala);
                if (!lavante) {
                    let deshaune = await _0x179175(pragati[mackala], athel);
                    if (deshaune && deshaune.indexOf("刷新成功") !== -1) {
                        await EnableCk(houda);
                        console.log("第", mackala + 1, "账号正常😁\n");
                    } else {
                        const lakeyah = await DisableCk(houda);
                        if (lakeyah.code === 200) {
                            console.log("第", mackala + 1, "账号失效！已🈲用");
                        } else {
                            console.log("第", mackala + 1, "账号失效！请重新登录！！！😭");
                        }
                        await invalidCookieNotify(athel, pragati[mackala].remarks);
                    }
                } else {
                    let amirr = await getUserInfo(athel);
                    if (!amirr.encryptMobile) {
                        let rudolphe = await _0x179175(pragati[mackala], athel);
                        if (rudolphe && rudolphe.indexOf("刷新成功") !== -1) {
                            await EnableCk(houda);
                            console.log("第", mackala + 1, "账号正常😁\n");
                        } else {
                            const jericca = await DisableCk(houda);
                            if (jericca.code === 200) {
                                console.log("第", mackala + 1, "账号失效！已🈲用");
                            } else {
                                console.log("第", mackala + 1, "账号失效！请重新登录！！！😭");
                            }
                        }
                        await invalidCookieNotify(athel, pragati[mackala].remarks);
                    } else {
                        await _0x179175(pragati[mackala], athel, getCookieMap(athel).get("SID"));
                        await EnableCk(houda);
                        console.log("第", mackala + 1, "账号正常🎉🎉\n");
                    }
                }
            } catch (hannelore) {
                console.log(hannelore);
            }
        }
      await wait(_0x543ec4(1, 3));
    }
    process.exit(0);
}());

