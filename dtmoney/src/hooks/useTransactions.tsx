import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';


interface Transaction {
   id: number;
   title: string;
   category: string;
   type: string;
   amount: number;
   createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children:ReactNode;
}

interface TransactionsContextDate{
    transactions:Transaction[];
    createTransaction:(transaction:TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextDate>({} as TransactionsContextDate);



export function TransactionsProvider({children}:TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

   useEffect(() => {
      api.get('transactions')
         .then(response => setTransactions(response.data.transactions))
   }, [setTransactions]);

   async function createTransaction(transactionInput: TransactionInput){
      const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});
      const {transaction} = response.data;

      setTransactions(
          [...transactions,
          transaction]
      )
   }

   return(
       <TransactionsContext.Provider value={{transactions, createTransaction}}>
           {children}
       </TransactionsContext.Provider>
   )
}

export function useTransaction(){
    const context = useContext(TransactionsContext);

    return context;
}