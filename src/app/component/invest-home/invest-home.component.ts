import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invest-home',
  templateUrl: './invest-home.component.html',
  styleUrls: ['./invest-home.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class InvestHomeComponent {
  initialInvestment: number = 1000;
  monthlyContribution: number = 120; 
  years: number = 2;
  rateOfReturn: number = 10;
  futureValue: number | null = null;
  interest: number | null = null;
  totalContributions: number | null = null;

  calculateInvestment() {
    const P = this.initialInvestment;
    const PMT = this.monthlyContribution;
    const t = this.years;
    const r = this.rateOfReturn / 100;
    const n = 12;

    // Future value calculations
    const futureValueOfLumpSum = P * Math.pow(1 + r / n, n * t);
    const futureValueOfContributions = PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
    this.futureValue = futureValueOfLumpSum + futureValueOfContributions;

    this.totalContributions = PMT * t * n;
    this.interest = this.futureValue - this.totalContributions - P;
  }
}
