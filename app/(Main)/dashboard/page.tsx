import NavigationBar from "@/components/navigation-bar";
import React from "react";
import TemplateGallery from "./_components/template-gallery";

const Dashboard = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Templates Gallery */}
      <TemplateGallery />
    </div>
  );
};

export default Dashboard;
