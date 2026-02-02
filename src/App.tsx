import { SharedScreenshot } from "./components/widgets/Hero"
import { SectionCarousel } from "./components/widgets/SectionCarousel"
import { SectionDescription } from "./components/widgets/SectionDescription"
import { SectionRules } from "./components/widgets/SectionRules"
import { SectionFooter } from "./components/widgets/SectionFooter"
import { SectionTable, type TableRow } from "./components/widgets/SectionTable"

type Props = {}

const tableData: TableRow[] = [
  { pos: "Ha22ru", sales: 10, score: 30 },
  { pos: "Ateci", sales: 0, score: 0 },
  { pos: "CY Cafe", sales: 0, score: 0 },
  { pos: "Fuel Cafe", sales: 0, score: 0 },
  { pos: "Rawaiian", sales: 0, score: 0 },
  { pos: "X-Protein F*it", sales: 0, score: 0 },
  { pos: "Avocado Cafe", sales: 0, score: 0 }
]

const App = (_props: Props) => {
  return (
    <div>
      {/* HERO */}
      <SharedScreenshot />
      {/* DESCRIPTION */}
      <div className="container max-w-xl! py-10 text-center">
        <SectionDescription />
      </div>
      {/* TABLE */}
      <div className="container py-10">
        <SectionTable
          data={tableData}
          showTotal={false}
        />
      </div>
      {/* RULES */}
      <div className="container py-10">
        <SectionRules />
      </div>
      {/* SLIDER */}
      <div className="py-10">
        <SectionCarousel />
      </div>
      {/* FOOTER */}
      <SectionFooter />
    </div>
  )
}

export default App
