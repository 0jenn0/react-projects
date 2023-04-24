import {
  getDatabase,
  ref,
  set,
  update,
  push,
  onValue,
  child,
  get,
} from "firebase/database";
import { app, db } from "../fbase";

// const db = getDatabase(app);

export default class FbaseApi {
  constructor(user) {
    this.email = user.email;
    this.name = user.displayName;
    this.photoUrl = user.photoURL;
    this.uid = user.uid;
    // this.admin = true;
    this.admin = false;
  }

  // get 써서 개고생
  //   isAdmin() {
  //     get(ref(db, "admin")).then((snapshot) => {
  //       //   console.log("isAdmin : ", snapshot.val().includes(this.uid));
  //       if (snapshot.val().includes(this.uid)) {
  //         this.admin = true;
  //         console.log("admin 바꿧다", this.admin);
  //       }
  //     });
  //   }
  isAdmin() {
    onValue(ref(db, "admin"), (snapshot) => {
      if (snapshot.val().includes(this.uid)) {
        this.admin = true;
        return true;
      }
    });
  }

  updateUser() {
    get(ref(db, "users")).then((snapshot) => {
      if (snapshot.exists()) {
        const users = snapshot.val();
        // console.log("Object.values : ", Object.values(users));
        if (Object.values(users).includes(this.uid)) {
          return;
        } else {
          push(ref(db, "/users"), this.uid);
        }
      } else {
        push(ref(db, "/users"), this.uid);
      }
    });
  }

  //   addToCart(itemId, itemPrice) {
  //     console.log("addShoppingItem");
  //     push(ref(db, `users/${this.uid}/carts/`), {
  //       id: itemId,
  //       price: itemPrice,
  //     });
  //   }

  //   원래 작동하던 addtocart
  addToCart(itemId, itemPrice) {
    console.log("addShoppingItem");
    push(ref(db, `users/${this.uid}/carts/`), {
      id: itemId,
      price: itemPrice,
    });
  }

  // addToCart(itemId,itemPrice) {
  //     get(ref(db, `users/${this.uid}/carts`))
  // }
  //   users/userid/carts/아이템들
  readCart() {
    get(ref(db, `users/${this.uid}/carts`)).then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        const data = snapshot.val();
        const dataArray = Object.keys(data).map((key) => {
          //   return [data[key].id, data[key].price];
          console.log("카트를 읽자", [data[key].id, data[key].price]);
        });
      } else {
        console.log("카트가 비어있습니다.");
      }
    });
  }

  //   addShoppingItem(itemId, itemPrice) {
  //     console.log("addShoppingItem");
  //     onValue(ref(db, `users/${this.uid}/carts/`), (snapshot) => {
  //       const data = snapshot;
  //       console.log("스냅샷 데이타가 뭘까:", data);
  //     });
  //   }

  addConsoleLog() {
    console.log("응가");
  }
}
