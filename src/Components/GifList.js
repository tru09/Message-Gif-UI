import { TableBody, TableCell, TableRow, Table } from "@mui/material";
import "./Giflist.css";

const GifList = (props) => {
  const Giflist = props.giflist.map((gif) => (
    <Table>
      <TableBody>
        <TableRow
          key={gif.id}
          className="gif-list"
          onClick={() => {
            props.GifPost(true, gif.id);
          }}
        >
          <TableCell>
            <img
              id={gif.id}
              src={gif.images.downsized.url}
              alt="gif"
              key={gif.id}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ));

  return <div className="gif-div"> {Giflist}</div>;
};

export default GifList;
