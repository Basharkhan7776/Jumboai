import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <h1 className="text-9xl font-bold text-neutral-200 dark:text-neutral-800">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="h-24 w-24 text-neutral-400" />
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
            Page Not Found
          </h2>

          <p className="text-muted-foreground mb-8 text-lg">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="javascript:history.back()">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Link>
            </Button>
          </div>

          <div className="mt-16 border-t pt-8">
            <p className="text-muted-foreground text-sm">
              If you believe this is an error, please{" "}
              <Link to="/#contact" className="text-primary hover:underline font-medium">
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
