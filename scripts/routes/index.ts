import { NativeRouter, NativeStackRouter, Route } from '@smartface/router';
import Application from '@smartface/native/application';

import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Page3 from 'pages/page3';
import Case1 from 'pages/pgCase1';
import Case2 from 'pages/pgCase2';
import Case3 from 'pages/pgCase3';
import Case4 from 'pages/pgCase4';
import Case5 from 'pages/pgCase5';
import Case6 from 'pages/pgCase6';
import System from '@smartface/native/device/system';

Application.on('backButtonPressed', () => {
    NativeRouter.getActiveRouter()?.goBack();
});

const router = NativeRouter.of({
    path: '/',
    isRoot: true,
    routes: [
        NativeStackRouter.of({
            path: '/pages',
            routes: [
                Route.of<Page1>({
                    path: '/pages/page1',
                    build(router, route) {
                        return new Page1(router, route);
                    }
                }),
                Route.of<Page2>({
                    path: '/pages/page2',
                    build(router, route) {
                        return new Page2(router, route);
                    }
                }),
                Route.of<Case1>({
                    path: '/pages/case1',
                    build(router, route) {
                        return new Case1(router, route);
                    }
                }),
                Route.of<Case2>({
                    path: '/pages/case2',
                    build(router, route) {
                        return new Case2(router, route);
                    }
                }),

                Route.of<Case3>({
                    path: '/pages/case3',
                    build(router, route) {
                        return new Case3(router, route);
                    }
                }),
                Route.of<Case4>({
                    path: '/pages/case4',
                    build(router, route) {
                        return new Case4(router, route);
                    }
                }),
                Route.of<Case5>({
                    path: '/pages/case5',
                    build(router, route) {
                        return new Case5(router, route);
                    }
                }),
                Route.of<Case6>({
                    path: '/pages/case6',
                    build(router, route) {
                        return new Case6(router, route);
                    }
                }),
                NativeStackRouter.of({
                    path: '/pages/page3',
                    to: '/pages/page3/main',
                    modal: true,
                    routes: [
                        Route.of<Page3>({
                            path: '/pages/page3/main',
                            build(router, route) {
                                return new Page3(router, route);
                            }
                        })
                    ]
                })
            ]
        })
    ]
});

let listenerCounter = 0;
router.listen((location, action) => {
    if (System.isEmulator) {
        console.log(`[ROUTER] Counter: ${listenerCounter++} | location url: ${location.url}`);
    }
});

export default router;
