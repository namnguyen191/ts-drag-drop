var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from './base-component.js';
import { validate } from '../utils/validation.js';
import { projectState } from '../state/project-state.js';
import { AutoBind } from '../decorators/autobind.js';
export class ProjectInput extends Component {
    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
        const userInputs = this.gatherUserInputs();
        if (Array.isArray(userInputs)) {
            const [title, desc, people] = userInputs;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
    gatherUserInputs() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDesc = this.descriptionInputElement.value;
        const enteredPeople = +this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true
        };
        const descValidatable = {
            value: enteredDesc,
            required: true,
            minLength: 5
        };
        const peopleValidatable = {
            value: enteredPeople,
            required: true,
            min: 1,
            max: 5
        };
        if (!validate(peopleValidatable) ||
            !validate(titleValidatable) ||
            !validate(descValidatable)) {
            alert('Invalid input! Please try again');
            return;
        }
        else {
            return [enteredTitle, enteredDesc, +enteredPeople];
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    renderContent() { }
}
__decorate([
    AutoBind
], ProjectInput.prototype, "submitHandler", null);
//# sourceMappingURL=project-input.js.map