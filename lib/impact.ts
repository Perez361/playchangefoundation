/**
 * The single source of truth for PlayChange Foundation's impact figures.
 *
 * Every page that quotes our numbers must read them from here so the site
 * never shows two different figures for the same thing. Update the numbers in
 * this file only — never in a page.
 */

export interface ImpactStat {
  /** The figure as it should be displayed, e.g. '100+'. */
  value: string
  /** What the figure counts, e.g. 'Young People Reached'. */
  label: string
}

export const impactStats: ImpactStat[] = [
  { value: '100+', label: 'Young People Reached' },
  { value: '50+', label: 'Students Supported' },
  { value: '3+', label: 'Communities Reached' },
  { value: '5+', label: 'Sports Programs' },
]

export const impactIntro =
  "Through our various initiatives and programs, we're making a real difference in communities across Ghana."
