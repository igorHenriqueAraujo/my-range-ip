# my-range-ip
Client para descobrir o range de IP da máquina que está sendo executado.

Faça clone desse repositório e na pasta raiz execute.

``` bash
npm i -g
```

Isso irá instalar o client de linha de comando globalmente, se você usa linux provavelmente deverá executar o comando acima com `sudo`

Após esse passo ser executado com sucesso basta digitar no seu console.
``` bash
rip
```

Isso retornará os ranges de IP das suas interfaces de rede como no exemplo abaixo.

``` bash
wlp2s0 199.199.0.1/256
docker0 13.0.0.0/256
tun0 199.0.0.199
```

Você também tem opção de retornar mais detalhes das suas interfaces de rede passando `-d` ou `--details` como argumento de execução.
``` bash
rip -d
```

``` bash
rip --details
```

O retorno será parecido com o abaixo.

``` bash
wlp2s0: {
  address: '199.199.0.1',
  netmask: '255.255.255.0',
  family: 'IPv4',
  mac: '1a:4b:80:f3:15:c1',
  internal: false,
  cidr: '199.199.0.22/24',
  rangeIP: '199.199.0.0/256'
}
docker0: {
  address: '13.0.0.1',
  netmask: '255.255.255.0',
  family: 'IPv4',
  mac: '03:52:23:2b:2c:b1',
  internal: false,
  cidr: '13.0.0.1/24',
  rangeIP: '13.0.0.0/256'
}
tun0: {
  address: '199.0.0.0',
  netmask: '255.255.255.255',
  family: 'IPv4',
  mac: '00:00:00:00:00:00',
  internal: false,
  cidr: '199.0.0.0/32',
  rangeIP: '199.0.0.0'
}
```
