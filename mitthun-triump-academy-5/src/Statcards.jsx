import React from 'react'
import {
  Users,
  FileCheck,
  GraduationCap,
  UserCheck,
} from "lucide-react";

export default function StatCards() {
  return (
    <section className="max-w-7xl mx-10 px-8 py-12 mb-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1 */}
        <div className="bg-[#e9f5fb] border-2 border-blue-400 rounded-2xl 
                        shadow-2xl p-8 text-center">
          <Users className="mx-auto h-10 w-10 text-blue-900 mb-4" />
          <h2 className="text-4xl font-bold text-black">20+</h2>
          <p className="mt-2 text-blue-800 font-medium">
            Experienced Mentors
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#e9f5fb] border-2 border-blue-400 rounded-2xl 
                        shadow-2xl p-8 text-center">
          <FileCheck className="mx-auto h-10 w-10 text-blue-900 mb-4" />
          <h2 className="text-4xl font-bold text-black">100%</h2>
          <p className="mt-2 text-blue-800 font-medium">
            Course Completion
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#e9f5fb] border-2 border-blue-400 rounded-2xl 
                        shadow-2xl p-8 text-center">
          <GraduationCap className="mx-auto h-10 w-10 text-blue-900 mb-4" />
          <h2 className="text-4xl font-bold text-black">10+</h2>
          <p className="mt-2 text-blue-800 font-medium">
            Teaching Excellence
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#e9f5fb] border-2 border-blue-300 rounded-2xl 
                        shadow-2xl p-8 text-center">
          <UserCheck className="mx-auto h-10 w-10 text-blue-900 mb-4" />
          <h2 className="text-4xl font-bold text-black">95%</h2>
          <p className="mt-2 text-blue-800 font-medium">
            Exam Success Rate

          </p>
        </div>
      </div>

    </section>
  );
}
