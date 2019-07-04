import { Component, OnInit } from '@angular/core';
import {ISkill} from '../../components/skill/skill.component';
import {MenuStateService} from '../../services/menu-state.service';
import { Chart } from 'chart.js';

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

  public chart;

  constructor(public menu: MenuStateService) { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['a','b','c'],
        datasets: [
          {
            data: [2,3,1],
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: [3,1,2],
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
