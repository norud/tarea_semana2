import { Component, EventEmitter, Output, OnInit, Input} from "@angular/core";

@Component({
    selector: "SearchForm",
    templateUrl: "./search-form.component.html"
})
export class SearchFormComponent implements OnInit{
    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() inicial: string;

    ngOnInit(): void {
        this.textFieldValue = this.inicial;
    }
    onSearchTap(): void {
        console.log(this.textFieldValue);
        if(this.textFieldValue.length > 2)
        {
            this.search.emit(this.textFieldValue);
        }

    }

}
