import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-hymn-video',
  templateUrl: './hymn-video.component.html',
  styleUrls: ['./hymn-video.component.scss']
})
export class HymnVideoComponent implements OnInit, AfterViewInit {

  // The URL of the video
  @Input({ required: false }) hymnUrl?: string;

  /**
   * ViewChild reference to the YouTube player container element.
   * This is used to interact with the YouTube player in the template.
   */
  @ViewChild('youTubePlayer') youTubePlayer!: ElementRef<HTMLDivElement>;

  // The video ID
  videoId: string = '';
  // The video width and height
  videoWidth: number = 800;
  videoHeight: number = 600;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // if (this.hymnUrl) {
    //   this.videoId = extractYouTubeVideoId(this.hymnUrl) || '';
    // }
    if (this.hymnUrl) {
      const videoId = extractYouTubeVideoId(this.hymnUrl);
      if (videoId) {
        this.videoId = videoId;
        console.log(this.videoId);
      } else {
        console.error('Invalid YouTube URL');
      }
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

/**
 * Extracts the video ID from a YouTube URL.
 *
 * @param {string} url - The YouTube video URL.
 * @return {string | null} The extracted video ID, or null if not found.
 */
function extractYouTubeVideoId(url: string): string | null {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*[?&]v=([^&#]*)|(?:https?:\/\/)?youtu\.be\/([^&#]*)/;
  const match = url.match(regex);
  return match ? (match[1] || match[2]) : null;
}
