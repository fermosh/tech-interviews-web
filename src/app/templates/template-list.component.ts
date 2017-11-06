import { Component, OnInit }  from '@angular/core';
import { ITemplate } from './../shared/classes/template';
import { TemplateService } from './../shared/services/template.service';

declare var $: any;

@Component({
    templateUrl: './template-list.component.html',
    styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {
    title: string = 'Template List';
    isPageRendered: boolean;
    listFilter: string;
    errorMessage: string;
    templates: ITemplate[];

    constructor(private templateService: TemplateService) { }

    ngOnInit(): void {
        this.templateService.getTemplates()
                .subscribe(templates => this.templates = templates,
                           error => this.errorMessage = <any>error);
    }

    ngAfterViewChecked(): void {
        if (this.templates && this.templates.length > 0 && !this.isPageRendered) {
            $('.uui-table.dynamic').dataTable({'dom': 'lf<t>ip'});

            this.isPageRendered = true;
        }
    }
}
