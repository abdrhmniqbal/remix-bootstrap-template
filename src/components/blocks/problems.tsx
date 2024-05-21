import {
  Problem,
  ProblemContent,
  ProblemDescription,
  ProblemTitle,
  ProblemWrapper,
} from '@/components/ui/problems'

export default function Problems() {
  return (
    <ProblemWrapper>
      <ProblemTitle>80% of startups never launched</ProblemTitle>
      <ProblemDescription>
        Auth, payment, design... there is too much to do.
      </ProblemDescription>
      <ProblemContent>
        <Problem title="Start creating a project">💻</Problem>
        <Problem title="Not have time enough">⏱️</Problem>
        <Problem
          title="Leave the project"
          lastItem
        >
          🚪
        </Problem>
      </ProblemContent>
    </ProblemWrapper>
  )
}
