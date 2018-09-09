import m from 'mithril';
import { User } from '../models/User';
import { Message } from '../models/Message';

// export class MainWindow {
//     view() {
//         return m("div", { class: "wrapper" }, [
//             m("nav#sidebar", [
//                 m("div", { class: "sidebar-header" }, [
//                     m("h3", "Sidebar")
//                 ]),
//                 m("ul", { class: "list-unstyled components" }, [
//                     m("li", { class: "active" }, [
//                         m("a", { class: "dropdown-toggle", href:"#homeSubmenu", data-toggle:"collapse", aria-expanded:"false" }, [

//                         ])
//                     ])
//                 ])
//             ]),

//             m("div#content", [
                
//             ])
//         ]);
//     }
// }

export class MainWindow {
    // private user: User;
    private message: Message;

    constructor () {
        // this.user = new User();
        this.message = new Message();
    }
    
    view() {
        return m("div#main-window", [
            m("nav", [
                m("div#sidebar-header", [
                    m("h1#sidebar-header-title", "HvA Alice Bootcamp")
                ]),
                m("div#sidebar-nav-list", [
                    m("ul", [
                        m("li", "Message Board"),
                        m("li", "Users")
                    ])
                ])
            ]),
            m("main", [
                m("div", { class: "container-fluid" }, [
                    m("h1#main-title", "Message Board"),
                    // m(".user-list", this.user.list.map(
                    //     function(user: any) {
                    //         return m(".user-list-item", user.name)
                    //     }
                    // )),
                    m("div", this.message.list.map(
                        function(message: any) {
                            return [m("div#message-block", [
                                m("p#message-block-name", message.user.name),
                                m("p", message.text),
                                m("div#message-vote-block", [
                                    m("input", { class: "vote", type: "submit", name: message.id }, "vote"),
                                    m("p", "votes: " + message.votes.length),
                                ])

                            ]), m("br")]
                        }
                    ))
                ])
            ])
        ]);
    }
}




// import { User } from '../models/User';

// export class MainWindow {
//     private res : User;


//     constructor () {
//         this.res = new User();
//     }

//     view() {
//         return m("div", { class: "main-window" },
//             [
//                 m("nav", { class: "sidebar" }, 
//                     [
//                         m("div#sidebar-collapse-title-container",
//                             [
//                                 m("div#sidebar-collapse-title", { class: "sidebar-header" },
//                                     [
//                                         m("h3", "HvA Alice Bootcamp" ),
//                                         m("strong", "Alice")
//                                     ]
//                                 ),
//                             ]
//                         ),
//                         m("ul", { class:"list-unstyled components" },
//                             m("li", { class: "list-unstyled components"}, [
//                                 m("a", 
//                                     [
//                                         m("i", {class: "fas fa-briefcase"}, 
//                                             m("div#sidebar-item",
//                                                 "Message Board"
//                                             )
//                                         )
//                                     ]
//                                 )

//                             ])
                    
//                         )
//                     ]
//                 ),
//                 m("main",
//                     m ("div", { class: "container-fluid"}, [
//                         m("nav", { class: "navbar navbar-expand-lg navbar-light bg-light mobile-only"},[
//                             m("div", { class: "container-fluid"} ,
//                                 m("button#sidebar-collapse", { class: "btn btn-info"}, [
//                                     m("i", { class: "fas fa-align-left"}, ""),
//                                     m("span", "toggle sidebar")
//                                 ])
//                             )
//                         ] ),

//                         m(".user-list", this.res.list.map(function(user : any) {
//                             return m(".user-list-item", user.firstName + " " + user.lastName)
//                             })
//                         )

//                     ])

//                 )
              

//             ]
//         );
//     }
// }