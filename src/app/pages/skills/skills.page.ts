import { Component, OnInit } from '@angular/core';
import {ISkill} from '../../components/skill/skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  public softSkills: ISkill[] = [
    {
      image: 'calendar',
      text: 'organize'
    },
    {
      image: 'ios-people',
      text: 'lead'
    },
    {
      image: 'bulb',
      text: 'understand'
    },
    {
      image: 'flask',
      text: 'analyse'
    }
  ];
  public hardSkills: ISkill[] = [
    {
      image: 'phone-portrait',
      text: 'native'
    },
    {
      image: 'cloud-outline',
      text: 'web'
    },
    {
      image: 'cog',
      text: 'engineer'
    },
    {
      image: 'brush',
      text: 'design'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
