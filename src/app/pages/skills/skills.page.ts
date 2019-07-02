import { Component, OnInit } from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';
import {ApexAxisChartSeries, ApexChart, ApexTitleSubtitle} from 'ng-apexcharts';

export interface ISkill {
  title: ApexTitleSubtitle
  chart: ApexChart
  series: ApexAxisChartSeries
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  public softSkills: ISkill = {
    title: {
      text: 'Soft Skills'
    },
    chart: {
      height: 350,
      type: 'radar'
    },
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }]
  };

  /*
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
  */

  constructor(public menu: MenuStateService) { }

  ngOnInit() {
  }

}
