import { Component, OnInit } from '@angular/core';
import {ISkill} from '../../components/skill/skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  private softSkills: ISkill[] = [

  ];
  private hardSkills: ISkill[] = [

  ];

  constructor() { }

  ngOnInit() {
  }

}
