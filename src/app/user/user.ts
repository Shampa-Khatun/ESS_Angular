// import { Component ,computed,signal} from '@angular/core';
// import { DUMMY_USERS } from '../../dummy-users';
// const randomindex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.html',
//   styleUrl: './user.css'
// })
// export class User {
//   selectedUser = signal(DUMMY_USERS[randomindex]);

//   imagepath = computed(()=>`assets/users/` + this.selectedUser().avatar)

//   // get imagepath(){
//   //   return `assets/users/` + this.selectedUser.avatar;
//   // }

//   onSelect() {
//     const randomindex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomindex]);

//     //this.selectedUser = DUMMY_USERS[randomindex]; error ashe
//     //console.log('User selected');
//   }
// }
import { Component ,computed,Input, input, Output, EventEmitter,output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
const randomindex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();


  //select = output<string>();
  // avatar = input<string>();
  // name = input<string>();
  // imagepath = computed(()=>{
  //   return `assets/users/` + this.avatar()})
  get imagepath(){
    return `assets/users/` + this.avatar;
  }
  onSelect() {
    this.select.emit(this.id);
  }
  }