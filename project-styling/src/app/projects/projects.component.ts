import { Component, OnInit, HostBinding } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import { clickedStateTrigger, slideStateTrigger, itemStateTrigger, listStateTrigger } from '../animations';
import { AnimationEvent } from '@angular/animations';
import { routeFadeStateTrigger, routeSlideStateTrigger  } from '../shared/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    clickedStateTrigger,
    slideStateTrigger,
    itemStateTrigger,
    routeFadeStateTrigger,
    routeSlideStateTrigger,
    listStateTrigger
    ]
})
export class ProjectsComponent implements OnInit {

//  @HostBinding('@routeFadeState') routeAnimation = true; -> zamieniono opacity na slide
  @HostBinding('@routeSlideState') routeAnimation = true;

  projects: Project[];
 // displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(
    private prjService: ProjectsService
  ) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
      (prj: Project[]) => {
        this.progress = 'finished';
        this.projects = prj;
        // Nieaktywna funkcja wyświetlania elementów po kolei -> zastosowano opcję stagger z Angular 4.2 plus
        // if(this.projects.length >= 1) {
        //   this.displayedProjects.push(this.projects[0])
        // }
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
    setTimeout(()=> {
      this.projects.unshift(project);
    }, 300)
  }

  //  Nieaktywna funkcja wyświetlania elementów po kolei -> zastosowano opcję stagger z Angular 4.2 plus

  // onItemAnimated(animationEvent: AnimationEvent, lastPrjId: number) {
  //   if(animationEvent.fromState != 'void') {
  //     return;
  //   }
  //   if(this.projects.length > lastPrjId + 1) {
  //     this.displayedProjects.push(this.projects[lastPrjId + 1])
  //   }
  //   else {
  //     this.projects = this.displayedProjects;
  //   }
  // }
}
