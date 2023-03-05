import { useState } from "react";
import { Connection, PublicKey} from "@solana/web3.js";
import { Button, Table } from "react-bootstrap";

const connection = new Connection("https://devnet.solana.com");

const publicKeyString = "8Fo4vTdGBM8xseV1x3RDMfmHVfE8BPyxqFYPB55tNmPP";
const publicKey = new PublicKey(publicKeyString);

const TransactionPage = () => {
  const [lastTransaction, setLastTransaction] = useState<null | string>(null);

  const handleCheck = async () => {
    try {
      const { blockhash } = await connection.getLatestBlockhash();
      const confirmedTransactions = await connection.getConfirmedSignaturesForAddress2(
        publicKey,
        {
          limit: 1,
        }
      );
      if (confirmedTransactions.length > 0) {
        setLastTransaction(confirmedTransactions[0].signature);
      } else {
        setLastTransaction(null);
      }
    } catch (error) {
      console.error(error);
      setLastTransaction(null);
    }
  };

  return (
    <div>
      <Button onClick={handleCheck}>Check Last Transaction</Button>
      {lastTransaction && (
        <Table>
          <thead>
            <tr>
              <th>Last Transaction Signature</th>
            </tr>
          </thead>
          <tbody>
            <tr key={lastTransaction}>
              <td>{lastTransaction}</td>
            </tr>
          </tbody>
        </Table>
      )}
      {lastTransaction === null && (
        <p>No transactions found for this address.</p>
      )}
    </div>
  );
};

export default TransactionPage;