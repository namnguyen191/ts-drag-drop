/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../utils/validation.ts" />
/// <reference path="../state/project-state.ts" />

namespace App {
    export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;

        constructor() {
            super('project-input', 'app', true, 'user-input');
            this.titleInputElement = this.element.querySelector(
                '#title'
            )! as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector(
                '#description'
            )! as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector(
                '#people'
            )! as HTMLInputElement;
            this.configure();
        }

        @AutoBind
        private submitHandler(event: Event) {
            event.preventDefault();
            console.log(this.titleInputElement.value);
            const userInputs = this.gatherUserInputs();
            if (Array.isArray(userInputs)) {
                const [title, desc, people] = userInputs;
                projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }

        private gatherUserInputs(): [string, string, number] | void {
            const enteredTitle = this.titleInputElement.value;
            const enteredDesc = this.descriptionInputElement.value;
            const enteredPeople = +this.peopleInputElement.value;

            const titleValidatable: Validatable = {
                value: enteredTitle,
                required: true
            };

            const descValidatable: Validatable = {
                value: enteredDesc,
                required: true,
                minLength: 5
            };

            const peopleValidatable: Validatable = {
                value: enteredPeople,
                required: true,
                min: 1,
                max: 5
            };

            if (
                !validate(peopleValidatable) ||
                !validate(titleValidatable) ||
                !validate(descValidatable)
            ) {
                alert('Invalid input! Please try again');
                return;
            } else {
                return [enteredTitle, enteredDesc, +enteredPeople];
            }
        }

        configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }

        private clearInputs() {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }

        renderContent() {}
    }
}
