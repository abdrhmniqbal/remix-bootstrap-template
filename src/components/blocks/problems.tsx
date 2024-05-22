import {
  Problem,
  ProblemContent,
  ProblemDescription,
  ProblemHeader,
  ProblemTitle,
  ProblemWrapper,
} from '@/components/ui/problems'

export default function Problems() {
  return (
    <ProblemWrapper>
      <ProblemHeader>
        <ProblemTitle>80% of startups never launched</ProblemTitle>
        <ProblemDescription>
          Auth, payment, design... there is too much to do.
        </ProblemDescription>
      </ProblemHeader>
      <ProblemContent>
        <Problem description="Start creating a project">💻</Problem>
        <Problem description="Not have time enough">⏱️</Problem>
        <Problem
          description="Leave the project"
          lastItem
        >
          🚪
        </Problem>
      </ProblemContent>
    </ProblemWrapper>
  )
}
