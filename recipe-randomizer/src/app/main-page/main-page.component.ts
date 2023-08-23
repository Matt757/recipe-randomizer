import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {GetService} from "../services/get.service";
import {MainCourse} from "../utils/MainCourse";
import {RecipeFilters} from "../utils/RecipeFilters";
import {Recipe} from "../utils/Recipe";
import {FirstCourse} from "../utils/FirstCourse";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(private service:GetService) {}
  rows:any = []
  customElements: any;
  ngOnInit () {
    this.service.getAllRecipes()
      .subscribe((response) => {
        response.forEach( (element) => {
          this.rows.push(element);
        })
      })

    const body = document.body,
      html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    const side_bar = <HTMLElement> document.getElementById('side-bar');
    side_bar.style.height = (height).toString();
  }

  getNewRecipe(event: any) {
    document.getElementById("randomRecipe")?.remove();
    let meatless: boolean;
    let oneDay: boolean;
    let selectHasMeat = document.getElementById("selectHasMeat") as HTMLSelectElement;
    let selectNumberOfDays = document.getElementById("selectNumberOfDays") as HTMLSelectElement;
    meatless = selectHasMeat?.options[selectHasMeat?.selectedIndex].value === "yes";
    oneDay = selectNumberOfDays?.options[selectNumberOfDays?.selectedIndex].value === "oneDay";
    const getFirstCourseButton = document.createElement('button');
    // <button id='getFirstCourse' style='border: 1px solid #E8EAED; border-radius: 5px;
    // box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: 'Quicksand', sans-serif;'></button>
    getFirstCourseButton.id = 'getFirstCourse';
    getFirstCourseButton.style.border = '1px solid #E8EAED';
    getFirstCourseButton.style.borderRadius = '5px';
    getFirstCourseButton.style.boxShadow = '0 1px 3px -2px #9098A9';
    getFirstCourseButton.style.cursor = 'pointer';
    getFirstCourseButton.style.fontFamily = '\'Quicksand\', sans-serif';
    this.service.getRecipe(new RecipeFilters(meatless, oneDay)).subscribe((response) => {
      let recipe = new Recipe();
      Object.assign(recipe, response);
      document.getElementById("getRecipeForm")?.insertAdjacentHTML('beforeend', '<div id="randomRecipe" style="margin: 1vw"><p style="border-collapse: collapse; font-family: \'Quicksand\', sans-serif; font-weight: bold; color: white;">' + recipe.mainCourseDto.name + '</p><p style="border-collapse: collapse; font-family: \'Quicksand\', sans-serif; color: white;">' + recipe.mainCourseDto.notes + '</p></div>' + getFirstCourseButton + '<button id="cookRecipe" style="border: 1px solid #E8EAED;' +
        '  border-radius: 5px;' +
        '  background: #009578;' +
        '  box-shadow: 0 1px 3px -2px #9098A9;' +
        '  color: white;' +
        '  cursor: pointer;' +
        '  margin-top: 1vh;' +
        '  font-weight: bold;' +
        '  font-family: \'Quicksand\', sans-serif;">I will cook this today</button>')
    });
    document.getElementById("getRecipeForm")?.appendChild(getFirstCourseButton);
    console.log(getFirstCourseButton);
    document.getElementById('getFirstCourse')?.addEventListener('click', () => {
      alert("hehehehey");
      this.service.getFirstCourse().subscribe((response) => {
        let firstCourse = new FirstCourse();
        Object.assign(firstCourse, response);
        document.getElementById("getRecipeForm")?.insertAdjacentHTML('beforeend', '<div id=\"randomRecipe\" style=\"margin: 1vw\"><p style=\"border-collapse: collapse; font-family: \'Quicksand\', sans-serif; font-weight: bold; color: white;\">' + firstCourse.name + '</p><p style=\"border-collapse: collapse; font-family: \'Quicksand\', sans-serif; color: white;\">' + firstCourse.notes + '</p></div>"');
      });
    });
    console.log(document.getElementById('cookRecipe'));
    document.getElementById('cookRecipe')?.addEventListener('click', event => {
      alert("hehehehey");
      // this.service.getFirstCourse().subscribe((response) => {
      //   let firstCourse = new FirstCourse();
      //   Object.assign(firstCourse, response);
      //   document.getElementById("getRecipeForm")?.insertAdjacentHTML('beforeend', '<div id=\"randomRecipe\" style=\"margin: 1vw\"><p style=\"border-collapse: collapse; font-family: \'Quicksand\', sans-serif; font-weight: bold; color: white;\">' + firstCourse.name + '</p><p style=\"border-collapse: collapse; font-family: \'Quicksand\', sans-serif; color: white;\">' + firstCourse.notes + '</p></div>"');
      // });
    });
  }

  addRecipe(event: any) {
    document.getElementById("newRecipeConfirmation")?.remove();
    let recipeName = document.getElementById("name") as HTMLInputElement;
    let hasMeat = document.getElementById("hasMeat") as HTMLSelectElement;
    let notes = document.getElementById("notes") as HTMLInputElement;
    let numberOfDays = document.getElementById("numberOfDays") as HTMLInputElement;
    let lastCooked = document.getElementById("lastCooked") as HTMLInputElement;
    let requiresSideDish = document.getElementById("requiresSideDish") as HTMLInputElement;
    let button = event.target as HTMLElement;
    let buttonX = button.offsetLeft;
    let buttonY = button.offsetTop;
    let buttonHeight = button.offsetHeight;
    let buttonWidth = button.offsetWidth;
    if(parseInt(numberOfDays?.value).toString() == 'NaN') {
      document.getElementById("newRecipeForm")?.insertAdjacentHTML('beforeend', '<p id="newRecipeConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ (buttonX + buttonWidth) + 'px; top:' + buttonY + 'px; font-family: \'Quicksand\', sans-serif; color: red;">Number of days must be a number</p>')
      document.getElementById("newRecipeConfirmation")!.style.top = buttonY + buttonHeight/2 - document.getElementById("newRecipeConfirmation")!.offsetHeight/2 + 'px';
    }
    else if (!(/^((2000|2400|2800|(19|2[0-9])(0[48]|[2468][048]|[13579][26]))-02-29)$|^(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))$|^(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))$|^(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))$/.test(lastCooked?.value))) {
      document.getElementById("newRecipeForm")?.insertAdjacentHTML('beforeend', '<p id="newRecipeConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ (buttonX + buttonWidth) + 'px; top:' + buttonY + 'px; font-family: \'Quicksand\', sans-serif; color: red;">Invalid date</p>')
      document.getElementById("newRecipeConfirmation")!.style.top = buttonY + buttonHeight/2 - document.getElementById("newRecipeConfirmation")!.offsetHeight/2 + 'px';
    }
    else {
      let recipe = new MainCourse(1, recipeName?.value, (hasMeat?.value == "true"), notes?.value, parseInt(numberOfDays?.value), lastCooked?.value, (requiresSideDish.value == "true"));
      this.service.addRecipe(recipe).subscribe((response) => {
        document.getElementById("newRecipeForm")?.insertAdjacentHTML('beforeend', '<p id="newRecipeConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ (buttonX + buttonWidth) + 'px; top:' + buttonY + 'px; font-family: \'Quicksand\', sans-serif; color: lawngreen;">Successful!</p>')
        document.getElementById("newRecipeConfirmation")!.style.top = buttonY + buttonHeight/2 - document.getElementById("newRecipeConfirmation")!.offsetHeight/2 + 'px';
      }, (error) => {
        document.getElementById("newRecipeForm")?.insertAdjacentHTML('beforeend', '<p id="newRecipeConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ (buttonX + buttonWidth) + 'px; top:' + buttonY + 'px; font-family: \'Quicksand\', sans-serif; color: red;">' + error.error + '</p>')
        document.getElementById("newRecipeConfirmation")!.style.top = buttonY + buttonHeight/2 - document.getElementById("newRecipeConfirmation")!.offsetHeight/2 + 'px';
      });
    }
  }

  loadOptionButtons(event: any) {
    let row: any;
    if (event.target.tagName === "INPUT") {
      row = event.target.parentNode.parentNode;
    }
    else {
      row = event.target.parentNode;
    }
    if (document.getElementById('save') == null && document.getElementById('removeRecipe') == null && document.getElementById('confirm') == null) {
      document.getElementById('updateConfirmation')?.remove();
      document.getElementById('removeConfirmation')?.remove();
      document.getElementById('options')?.remove();
      row.querySelectorAll('td')[row.querySelectorAll('td').length - 1].insertAdjacentHTML('beforeend', "<div id='options' style='display: flex'> <button id='edit' style='border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;'><img src='https://cdn-icons-png.flaticon.com/512/860/860814.png' width='15vw' height='15vw'/></button>" +
        "<button id='remove' style='margin-left: 0.5vw; border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;'><img src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png' width='15vw' height='15vw'/></button>" +
        "<button id='cook' style='margin-left: 0.5vw; border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;'><img src='https://cdn-icons-png.flaticon.com/512/767/767266.png' width='15vw' height='15vw'/></button></div>");
      document.getElementById('edit')?.addEventListener('click', event => {
        let button = document.getElementById('edit');
        let parentCell = button?.parentNode?.parentNode as HTMLElement;
        button?.parentNode?.parentNode?.parentNode?.querySelectorAll('input').forEach(input => {input.readOnly = false});
        document.getElementById('options')?.remove();
        parentCell.insertAdjacentHTML('beforeend', '<div id="saveOptions" style="display: flex"><button id=\'save\' style=\'border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;\'><img src=\'https://cdn-icons-png.flaticon.com/512/2874/2874091.png\' width=\'15vw\' height=\'15vw\'/></button>' +
          '<button id=\'cancel\' style=\'margin-left: 0.5vw; border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;\'><img src=\'https://cdn-icons-png.flaticon.com/512/2976/2976286.png\' width=\'15vw\' height=\'15vw\'/></button></div>');
        document.getElementById('save')?.addEventListener('click', event=> {
          let parentCellX = parentCell?.getBoundingClientRect().left + window.pageXOffset;
          let parentCellY = parentCell?.getBoundingClientRect().top + window.pageYOffset;
          let parentCellHeight = parentCell?.getBoundingClientRect().height;
          let button = document.getElementById('save');
          let inputs = button?.parentNode?.parentNode?.parentNode?.querySelectorAll('input');
          if (inputs?.item(5).value != "true" && inputs?.item(5).value != "false") {
            document.getElementById('saveOptions')?.remove();
            document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: red;">Has Meat must be true or false</p>');
            document.getElementById("updateConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
          }
          else if (parseInt(<string>inputs?.item(3).value).toString() == 'NaN') {
            document.getElementById('saveOptions')?.remove();
            document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: red;">Number of days must be a number</p>');
            document.getElementById("updateConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
          }
          else if (!/^((2000|2400|2800|(19|2[0-9])(0[48]|[2468][048]|[13579][26]))-02-29)$|^(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))$|^(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))$|^(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30))$/.test(<string>inputs?.item(4).value)) {
            document.getElementById('saveOptions')?.remove();
            document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: red;">Invalid date</p>');
            document.getElementById("updateConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
          }
          else if (inputs?.item(6).value != "true" && inputs?.item(6).value != "false") {
            document.getElementById('saveOptions')?.remove();
            document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: red;">Requires Side Dish must be true or false</p>');
            document.getElementById("updateConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
          }
          else {
            this.service.getRecipeById(parseInt(<string>inputs?.item(0).value)).subscribe((response) => {
              let recipe = new MainCourse(parseInt(<string>inputs?.item(0).value), <string>inputs?.item(1).value, (inputs?.item(5).value == "true"), <string>inputs?.item(2).value, parseInt(<string>inputs?.item(3).value), <string>inputs?.item(4).value, (inputs?.item(6).value == "true"));
              this.service.updateRecipe(recipe).subscribe((response) => {
                document.getElementById('saveOptions')?.remove();
                inputs?.forEach(input => {input.readOnly = true})
                // TODO: fade out transition of the update confirmation
                document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: lawngreen;">Update successful</p>');
                document.getElementById("updateConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
              }, (error => {
                document.getElementById('saveOptions')?.remove();
                inputs?.forEach(input => {input.readOnly = true})
                document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: red;">' + error.error + '</p>');
                document.getElementById("updateConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
              }));
            }, (error) => {
              document.getElementById('saveOptions')?.remove();
              document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: red;">Recipe does not exist</p>');
              document.getElementById("updateConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
            });
          }
        });
        document.getElementById("cancel")?.addEventListener('click', event => {
          let button = document.getElementById('cancel');
          let inputs = button?.parentNode?.parentNode?.parentNode?.querySelectorAll('input');
          inputs?.forEach(input => {input.readOnly = true})
          document.getElementById('saveOptions')?.remove();
        });
      });
    }
    document.getElementById('remove')?.addEventListener('click', event => {
      let button = document.getElementById('remove');
      let parentCell = button?.parentNode?.parentNode as HTMLElement;
      let parentCellX = parentCell?.getBoundingClientRect().left + window.pageXOffset;
      let parentCellY = parentCell?.getBoundingClientRect().top + window.pageYOffset;
      let parentCellHeight = parentCell?.getBoundingClientRect().height;
      parentCell.querySelector("#options")?.remove();
      parentCell.insertAdjacentHTML("beforeend", "<div id='removeOptions' style='display: flex'><button id='removeRecipe' style='border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;)'>Remove?</button>" +
        "<button id=\'cancel\' style=\'margin-left: 0.5vw; border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;)\'><img src=\'https://cdn-icons-png.flaticon.com/512/2976/2976286.png\' width=\'15vw\' height=\'15vw\'/></button></div>");
      document.getElementById("removeRecipe")?.addEventListener('click', event => {
        this.service.removeRecipe(parseInt(parentCell.parentNode!.querySelectorAll('input').item(0).value)).subscribe((response) => {
          console.log(response);
          document.getElementById("removeOptions")?.remove();
          document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="removeConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: lawngreen;">Recipe removed</p>');
          document.getElementById("removeConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("removeConfirmation")!.offsetHeight/2 + 'px';
        },(error => {
          document.getElementById("removeOptions")?.remove();
          document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="removeConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ parentCellX + 'px; top:' + parentCellY + 'px;font-family: \'Quicksand\', sans-serif; color: red;">Recipe does not exist</p>');
          document.getElementById("removeConfirmation")!.style.top = parentCellY + parentCellHeight/2 - document.getElementById("removeConfirmation")!.offsetHeight/2 + 'px';
        }));
      })
      document.getElementById("cancel")?.addEventListener('click', event => {
        document.getElementById('removeOptions')?.remove();
      });
    });
    document.getElementById('cook')?.addEventListener('click', event => {
      let button = document.getElementById('cook');
      let parentCell = button?.parentNode?.parentNode as HTMLElement;
      console.log(parentCell?.parentNode);
      parentCell.querySelector("#options")?.remove();
      parentCell.insertAdjacentHTML('beforeend', '<div id="updateOptions" style="display: flex"><button id=\'confirm\' style=\'border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;)\'>Cook?</button>' +
        '<button id=\'cancel\' style=\'margin-left: 0.5vw; border: 1px solid #E8EAED; border-radius: 5px;box-shadow: 0 1px 3px -2px #9098A9;cursor: pointer;font-family: \'Quicksand\', sans-serif;)\'><img src=\'https://cdn-icons-png.flaticon.com/512/2976/2976286.png\' width=\'15vw\' height=\'15vw\'/></button></div>');
      document.getElementById('confirm')?.addEventListener('click', event=> {
        let button = document.getElementById('confirm');
        let inputs = button?.parentNode?.parentNode?.parentNode?.querySelectorAll('input');
        let parentCellX = parentCell?.getBoundingClientRect().left;
        let parentCellY = parentCell?.getBoundingClientRect().top;
        let parentCellHeight = parentCell?.getBoundingClientRect().height;
        let recipe = new MainCourse(parseInt(<string>inputs?.item(0).value), <string>inputs?.item(1).value, (inputs?.item(5).value == "true"), <string>inputs?.item(2).value, parseInt(<string>inputs?.item(3).value), (new Date()).toISOString().substring(0, 10), (inputs?.item(6).value == "true"));
        this.service.updateRecipe(recipe).subscribe((response) => {
          document.getElementById('updateOptions')?.remove();
          document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ (parentCellX + window.pageXOffset) + 'px; top:' + (parentCellY + window.pageYOffset) + 'px;font-family: \'Quicksand\', sans-serif; color: lawngreen;">Update successful</p>');
          document.getElementById("updateConfirmation")!.style.top = parentCellY + window.pageYOffset + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
        }, (error => {
          document.getElementById('updateOptions')?.remove();
          document.getElementById("flex-container")?.insertAdjacentHTML('beforeend', '<p id="updateConfirmation" style="margin-left: 0.5vw; text-align: center; position: absolute; left:'+ (parentCellX + window.pageXOffset) + 'px; top:' + (parentCellY + window.pageYOffset) + 'px;font-family: \'Quicksand\', sans-serif; color: red;">' + error.error + '</p>');
          document.getElementById("updateConfirmation")!.style.top = parentCellY + window.pageYOffset + parentCellHeight/2 - document.getElementById("updateConfirmation")!.offsetHeight/2 + 'px';
        }));
      });
      document.getElementById("cancel")?.addEventListener('click', event => {
        document.getElementById('updateOptions')?.remove();
      });
    });
  }
}

function removeFadeOut( el:any, speed:any ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
  setTimeout(function() {
    el.parentNode.removeChild(el);
  }, speed);
}
