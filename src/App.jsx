import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Login from './components/Login';
import ProcessList from './components/ProcessList';
import ProcessDetails from './components/ProcessDetails';
import KnowledgeBase from './components/KnowledgeBase';
import People from './components/People';

const CATEGORY_SLUG = "batch-record-review";
const CATEGORY_LABEL = "Batch Record Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/done" element={<DashboardLayout />}>
          <Route path={CATEGORY_SLUG} element={<ProcessList categorySlug={CATEGORY_SLUG} categoryLabel={CATEGORY_LABEL} />} />
          <Route path={`${CATEGORY_SLUG}/process/:id`} element={<ProcessDetails />} />
          <Route path="knowledge-base" element={<KnowledgeBase />} />
          <Route path="people" element={<People />} />
        </Route>
        <Route path="/data" element={<DashboardLayout />}>
          <Route index element={<div className="p-8 text-[#8f8f8f]">Data view coming soon</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
