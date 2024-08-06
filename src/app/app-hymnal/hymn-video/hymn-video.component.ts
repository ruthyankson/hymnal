import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hymn-video',
  templateUrl: './hymn-video.component.html',
  styleUrl: './hymn-video.component.scss'
})
export class HymnVideoComponent {

  // The URL=VideoId of the video
  @Input({required: false}) hymnUrl?: string;

  /**
   * ViewChild reference to the YouTube player container element.
   * This is used to interact with the YouTube player in the template.
   */
  @ViewChild('youTubePlayer') youTubePlayer!: ElementRef<HTMLDivElement>;

  // The video ID
  videoId = '';
  // The video width and height
  videoWidth = 800;
  videoHeight = 600;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const scriptTag = document.createElement('script');
    if (this.hymnUrl) {
      scriptTag.src = this.hymnUrl;
      document.body.appendChild(scriptTag);
      console.log(this.hymnUrl);
      if (this.hymnUrl) {
        this.videoId = this.hymnUrl;
      }
      // console.log(videoId);
    }
  }

  /**
   * Initializes the component after the view has been initialized.
   * Calls the `onResize` method to update the video width and height.
   * Adds an event listener to the window for the 'resize' event,
   * which calls the `onResize` method when the window is resized.
   *
   * @return {void} This function does not return anything.
   */
  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  /**
   * Updates the video width and height based on the current width of the YouTube player element.
   * If the width is greater than 1200px, it sets the video width to 1200px.
   * The video height is calculated as 60% of the video width.
   * Calls `detectChanges()` on the `changeDetectorRef` to trigger a change detection cycle.
   *
   * @return {void} This function does not return anything.
   */
  onResize(): void {
    this.videoWidth = Math.min(
      this.youTubePlayer.nativeElement.clientWidth,
      1200
    );
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }



}
