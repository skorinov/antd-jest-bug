import { Select, Button, Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useState } from 'react';

const TestComponent = (): JSX.Element | null => {
  const [data, setData] = useState({
    uid: 'test@test.com',
    country: 'US',
  });

  const countries = [
    {
      name: 'Guam',
      value: 'GU',
    },
    {
      name: 'United States of America',
      value: 'US',
    },
  ]

  const { Option } = Select;

  const submit = (): void => {
    console.log('Submit');
  };

  const onChange = (value: string): void => {
    console.log(value);
    setData({
      uid: 'test@test.com',
      country: value
    })
  };

  return (
    <Layout>
      <Content className='content'>
        <div>
          <Select
            data-testid='override-select-country'
            value={data?.country}
            onChange={onChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          >
          {countries.map(
            (item: any, index: number): JSX.Element => (
              <Option
                key={index}
                value={item.value}
              >
                {item.name}
              </Option>
            )
          )}
          </Select>  
          <Button
            data-testid='btn-test'
            type='primary'
            block
            onClick={submit}
          >
            Submit
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default TestComponent;
