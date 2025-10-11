import { ChangeDetectionStrategy, Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  imports: [],
  templateUrl: './signals-example.html',
  styleUrl: './signals-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsExample {
  
  count = signal(0);
  increment() {
    console.log(this.count()+1 +": is incremented count");
    this.count.update(c => c + 1);
  }

  reset(){
    console.log("count value reset to 0");
    this.count.set(0);
  }

  showCount = signal(false);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  }); 

  negationOfshowCount(){
    this.showCount.update(sc=>!sc);
    this.loggedEffect.destroy(); //when we execute it, it will stop effect
  }

  private loggedEffect = effect(() => {
    console.log(`Count: ${this.count()}`);
  });

  currentUser = signal("abhi");
  private readWithoutTracking = effect(() => { 
    console.log(`User: ${this.currentUser()} and counter: ${untracked(this.count)}`); 
  }); 

  updateUser(){
    this.currentUser.update(u =>u+this.count());
  }

  user = signal('Alice');

  constructor() {
    effect((onCleanup) => {
      const current = this.user();
      console.log(`User became: ${current}`);

      const timer = setTimeout(() => {
        console.log(`1 second ago, user became ${current}`);
      }, 1000);

      // Cleanup before next effect run
      onCleanup(() => {
        console.log(`Cleaning up for ${current}`);
        clearTimeout(timer);
      });
    });
  }

  changeUser() {
    this.user.update(u => (u === 'Alice' ? 'Bob' : 'Alice'));
  }
}
