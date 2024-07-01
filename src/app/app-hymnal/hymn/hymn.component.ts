import { Component } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HymnService } from '../../shared/services/hymn.service';

@Component({
  selector: 'app-hymn',
  templateUrl: './hymn.component.html',
  styleUrl: './hymn.component.scss'
})
export class HymnComponent {

  // Single hymn
  hymnHere?: HymnModel;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private hymnService: HymnService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getHymn();
  }

  // Fetch a hymn from the server
  getHymn(): void {
    const hymnNumber = Number(this.route.snapshot.paramMap.get('hymn_number'));
    if (hymnNumber) {
      this.hymnService.getHymn(hymnNumber).subscribe((hymn) => {
        this.hymnHere = hymn;
        this.isLoading = false;
      });
    }
  }

  formatUndefinedPossibleText(text: string | undefined): string {
    // let string_text: string | undefined;
    if (text) {
      return this.formatText(text);
    }
    return "";
  }

  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  goBack(): void {
    this.router.navigate(['hymnal/hymns']);
  }

}
