import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        'border-top': '2px solid #eee',
        'border-left': '1px solid #eee',
        backgroundColor: 'transparent',
        padding: '0 20px 20px 20px'
      })),
      state('selected', style({
        border: '2px solid orange',
        backgroundColor: '#caeff9',
        padding: '0 18px 18px 19px'
      })),
      transition('default => selected', [
        style({
          border: '2px solid #eee',
          padding: '0 18px 18px 19px',
          transform: 'scale(1)'
        }),
        animate('400ms ease-out', style({
          transform: 'scale(1.05)'
        })),
        animate(300)
      ]),
        transition('selected => default', [
          style({
            'border-top': '2px solid orange',
            'border-left': '1px solid orange',
            padding: '0 20px 20px 20px'
          }),
          animate('300ms ease-out')
        ])
      ])
    ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
      (prj: Project[]) => {
        this.progress = 'finished';
        this.projects = prj;
      }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.push(project);
  }
}
