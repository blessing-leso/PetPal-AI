import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PawPrint, Camera, MessageCircle, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F2FCE2] flex flex-col">
      {/* Header */}
      <header className="bg-[#33C3F0] text-white py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <PawPrint className="mr-2" />
          <h1 className="text-xl font-bold">PetPal.co</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-6 mb-8">
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <img 
              src="src/pictures/goldmyG.png" 
              alt="Golden Retriever in field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Your Pet's Virtual Veterinarian 🐾
              </h2>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-[#2E8B57]">
                <MessageCircle className="w-5 h-5 mr-2 text-[#33C3F0]" />
                Smart Chat Assistant
              </CardTitle>
              <CardDescription className="text-[#2E8B57]">Get instant answers about pet health and care</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/chat')}
                className="w-full bg-[#33C3F0] hover:bg-[#33C3F0]/90"
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-[#2E8B57]">
                <Camera className="w-5 h-5 mr-2 text-[#90EE90]" />
                Photo Analysis
              </CardTitle>
              <CardDescription className="text-[#008000]">Upload pet photos for AI-powered insights</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/upload')}
                variant="secondary"
                className="w-full bg-[#90EE90] text-[#008000] hover:bg-[#90EE90]/90"
              >
                Analyze Photo
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-[#2E8B57]">
                <Sparkles className="w-5 h-5 mr-2 text-[#F2FCE2]" />
                Daily Pet Tips
              </CardTitle>
              <CardDescription className="text-[#2E8B57]">Personalized wellness advice for your furry friend</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/tips')}
                variant="outline"
                className="w-full border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0]/10"
              >
                View Tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#33C3F0] text-white py-4 text-center text-sm">
        <p>© 2025 PetPal.co. All rights reserved. 🐶🐱</p>
      </footer>
    </div>
  );
};

export default Index;
