import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCalculatorStore } from '@/store/calculatorStore';
import { motion } from 'framer-motion';

export function Calculator() {
  const { currentValue, previousValue, operation, clear, deleteNumber, appendNumber, selectOperation, evaluate } = useCalculatorStore();

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <Card className="w-full h-full bg-secondary text-secondary-foreground">
        <CardHeader>
          <CardTitle className="text-center">Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-4 bg-secondary p-4 rounded-lg mb-4">
              <div className="text-sm text-muted-foreground text-right">
                {previousValue} {operation}
              </div>
              <div className="text-3xl font-bold text-right overflow-hidden">
                {currentValue}
              </div>
            </div>

            <Button
              variant="secondary"
              className="col-span-2"
              onClick={() => clear()}
            >
              AC
            </Button>
            <Button
              variant="secondary"
              onClick={() => deleteNumber()}
            >
              DEL
            </Button>
            <Button
              variant="secondary"
              onClick={() => selectOperation('/')}
            >
              ÷
            </Button>

            {['7', '8', '9'].map((num) => (
              <Button
                key={num}
                variant="outline"
                onClick={() => appendNumber(num)}
              >
                {num}
              </Button>
            ))}
            <Button
              variant="secondary"
              onClick={() => selectOperation('*')}
            >
              ×
            </Button>

            {['4', '5', '6'].map((num) => (
              <Button
                key={num}
                variant="outline"
                onClick={() => appendNumber(num)}
              >
                {num}
              </Button>
            ))}
            <Button
              variant="secondary"
              onClick={() => selectOperation('-')}
            >
              -
            </Button>

            {['1', '2', '3'].map((num) => (
              <Button
                key={num}
                variant="outline"
                onClick={() => appendNumber(num)}
              >
                {num}
              </Button>
            ))}
            <Button
              variant="secondary"
              onClick={() => selectOperation('+')}
            >
              +
            </Button>

            <Button
              variant="outline"
              className="col-span-2"
              onClick={() => appendNumber('0')}
            >
              0
            </Button>
            <Button
              variant="outline"
              onClick={() => appendNumber('.')}
            >
              .
            </Button>
            <Button
              variant="secondary"
              onClick={() => evaluate()}
            >
              =
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}