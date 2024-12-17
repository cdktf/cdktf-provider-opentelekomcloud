# `enterpriseVpnGatewayV5` Submodule <a name="`enterpriseVpnGatewayV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnGatewayV5 <a name="EnterpriseVpnGatewayV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5 opentelekomcloud_enterprise_vpn_gateway_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zones: typing.List[str],
  name: str,
  access_private_ip1: str = None,
  access_private_ip2: str = None,
  access_subnet_id: str = None,
  access_vpc_id: str = None,
  asn: typing.Union[int, float] = None,
  attachment_type: str = None,
  connect_subnet: str = None,
  eip1: EnterpriseVpnGatewayV5Eip1 = None,
  eip2: EnterpriseVpnGatewayV5Eip2 = None,
  er_id: str = None,
  flavor: str = None,
  ha_mode: str = None,
  id: str = None,
  local_subnets: typing.List[str] = None,
  network_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EnterpriseVpnGatewayV5Timeouts = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#availability_zones EnterpriseVpnGatewayV5#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#name EnterpriseVpnGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessPrivateIp1">access_private_ip1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_1 EnterpriseVpnGatewayV5#access_private_ip_1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessPrivateIp2">access_private_ip2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_2 EnterpriseVpnGatewayV5#access_private_ip_2}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessSubnetId">access_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_subnet_id EnterpriseVpnGatewayV5#access_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessVpcId">access_vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_vpc_id EnterpriseVpnGatewayV5#access_vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#asn EnterpriseVpnGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#attachment_type EnterpriseVpnGatewayV5#attachment_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.connectSubnet">connect_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#connect_subnet EnterpriseVpnGatewayV5#connect_subnet}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.eip1">eip1</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a></code> | eip1 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.eip2">eip2</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a></code> | eip2 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.erId">er_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#er_id EnterpriseVpnGatewayV5#er_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#flavor EnterpriseVpnGatewayV5#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.haMode">ha_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#ha_mode EnterpriseVpnGatewayV5#ha_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.localSubnets">local_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#local_subnets EnterpriseVpnGatewayV5#local_subnets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#network_type EnterpriseVpnGatewayV5#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#tags EnterpriseVpnGatewayV5#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#vpc_id EnterpriseVpnGatewayV5#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#availability_zones EnterpriseVpnGatewayV5#availability_zones}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#name EnterpriseVpnGatewayV5#name}.

---

##### `access_private_ip1`<sup>Optional</sup> <a name="access_private_ip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessPrivateIp1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_1 EnterpriseVpnGatewayV5#access_private_ip_1}.

---

##### `access_private_ip2`<sup>Optional</sup> <a name="access_private_ip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessPrivateIp2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_2 EnterpriseVpnGatewayV5#access_private_ip_2}.

---

##### `access_subnet_id`<sup>Optional</sup> <a name="access_subnet_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_subnet_id EnterpriseVpnGatewayV5#access_subnet_id}.

---

##### `access_vpc_id`<sup>Optional</sup> <a name="access_vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.accessVpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_vpc_id EnterpriseVpnGatewayV5#access_vpc_id}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#asn EnterpriseVpnGatewayV5#asn}.

---

##### `attachment_type`<sup>Optional</sup> <a name="attachment_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.attachmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#attachment_type EnterpriseVpnGatewayV5#attachment_type}.

---

##### `connect_subnet`<sup>Optional</sup> <a name="connect_subnet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.connectSubnet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#connect_subnet EnterpriseVpnGatewayV5#connect_subnet}.

---

##### `eip1`<sup>Optional</sup> <a name="eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.eip1"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

eip1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#eip1 EnterpriseVpnGatewayV5#eip1}

---

##### `eip2`<sup>Optional</sup> <a name="eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.eip2"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

eip2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#eip2 EnterpriseVpnGatewayV5#eip2}

---

##### `er_id`<sup>Optional</sup> <a name="er_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.erId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#er_id EnterpriseVpnGatewayV5#er_id}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#flavor EnterpriseVpnGatewayV5#flavor}.

---

##### `ha_mode`<sup>Optional</sup> <a name="ha_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.haMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#ha_mode EnterpriseVpnGatewayV5#ha_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_subnets`<sup>Optional</sup> <a name="local_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.localSubnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#local_subnets EnterpriseVpnGatewayV5#local_subnets}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.networkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#network_type EnterpriseVpnGatewayV5#network_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#tags EnterpriseVpnGatewayV5#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#timeouts EnterpriseVpnGatewayV5#timeouts}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#vpc_id EnterpriseVpnGatewayV5#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1">put_eip1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2">put_eip2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp1">reset_access_private_ip1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp2">reset_access_private_ip2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessSubnetId">reset_access_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessVpcId">reset_access_vpc_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAsn">reset_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAttachmentType">reset_attachment_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetConnectSubnet">reset_connect_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip1">reset_eip1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip2">reset_eip2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetErId">reset_er_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetFlavor">reset_flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetHaMode">reset_ha_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetLocalSubnets">reset_local_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_eip1` <a name="put_eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1"></a>

```python
def put_eip1(
  bandwidth_name: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  charge_mode: str = None,
  id: str = None,
  type: str = None
) -> None
```

###### `bandwidth_name`<sup>Optional</sup> <a name="bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1.parameter.bandwidthName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}.

---

###### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1.parameter.bandwidthSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}.

---

###### `charge_mode`<sup>Optional</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1.parameter.chargeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip1.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}.

---

##### `put_eip2` <a name="put_eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2"></a>

```python
def put_eip2(
  bandwidth_name: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  charge_mode: str = None,
  id: str = None,
  type: str = None
) -> None
```

###### `bandwidth_name`<sup>Optional</sup> <a name="bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2.parameter.bandwidthName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}.

---

###### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2.parameter.bandwidthSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}.

---

###### `charge_mode`<sup>Optional</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2.parameter.chargeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putEip2.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#create EnterpriseVpnGatewayV5#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#delete EnterpriseVpnGatewayV5#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#update EnterpriseVpnGatewayV5#update}.

---

##### `reset_access_private_ip1` <a name="reset_access_private_ip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp1"></a>

```python
def reset_access_private_ip1() -> None
```

##### `reset_access_private_ip2` <a name="reset_access_private_ip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessPrivateIp2"></a>

```python
def reset_access_private_ip2() -> None
```

##### `reset_access_subnet_id` <a name="reset_access_subnet_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessSubnetId"></a>

```python
def reset_access_subnet_id() -> None
```

##### `reset_access_vpc_id` <a name="reset_access_vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAccessVpcId"></a>

```python
def reset_access_vpc_id() -> None
```

##### `reset_asn` <a name="reset_asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAsn"></a>

```python
def reset_asn() -> None
```

##### `reset_attachment_type` <a name="reset_attachment_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetAttachmentType"></a>

```python
def reset_attachment_type() -> None
```

##### `reset_connect_subnet` <a name="reset_connect_subnet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetConnectSubnet"></a>

```python
def reset_connect_subnet() -> None
```

##### `reset_eip1` <a name="reset_eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip1"></a>

```python
def reset_eip1() -> None
```

##### `reset_eip2` <a name="reset_eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetEip2"></a>

```python
def reset_eip2() -> None
```

##### `reset_er_id` <a name="reset_er_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetErId"></a>

```python
def reset_er_id() -> None
```

##### `reset_flavor` <a name="reset_flavor" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetFlavor"></a>

```python
def reset_flavor() -> None
```

##### `reset_ha_mode` <a name="reset_ha_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetHaMode"></a>

```python
def reset_ha_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_subnets` <a name="reset_local_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetLocalSubnets"></a>

```python
def reset_local_subnets() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EnterpriseVpnGatewayV5 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EnterpriseVpnGatewayV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnterpriseVpnGatewayV5 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnterpriseVpnGatewayV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnGatewayV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1">eip1</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference">EnterpriseVpnGatewayV5Eip1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2">eip2</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference">EnterpriseVpnGatewayV5Eip2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erAttachmentId">er_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference">EnterpriseVpnGatewayV5TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionGroup">used_connection_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionNumber">used_connection_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1Input">access_private_ip1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2Input">access_private_ip2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetIdInput">access_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcIdInput">access_vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentTypeInput">attachment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnetInput">connect_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1Input">eip1_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2Input">eip2_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erIdInput">er_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavorInput">flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haModeInput">ha_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnetsInput">local_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1">access_private_ip1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2">access_private_ip2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetId">access_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcId">access_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnet">connect_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erId">er_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haMode">ha_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnets">local_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `eip1`<sup>Required</sup> <a name="eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1"></a>

```python
eip1: EnterpriseVpnGatewayV5Eip1OutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference">EnterpriseVpnGatewayV5Eip1OutputReference</a>

---

##### `eip2`<sup>Required</sup> <a name="eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2"></a>

```python
eip2: EnterpriseVpnGatewayV5Eip2OutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference">EnterpriseVpnGatewayV5Eip2OutputReference</a>

---

##### `er_attachment_id`<sup>Required</sup> <a name="er_attachment_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erAttachmentId"></a>

```python
er_attachment_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeouts"></a>

```python
timeouts: EnterpriseVpnGatewayV5TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference">EnterpriseVpnGatewayV5TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `used_connection_group`<sup>Required</sup> <a name="used_connection_group" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionGroup"></a>

```python
used_connection_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_connection_number`<sup>Required</sup> <a name="used_connection_number" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.usedConnectionNumber"></a>

```python
used_connection_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_private_ip1_input`<sup>Optional</sup> <a name="access_private_ip1_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1Input"></a>

```python
access_private_ip1_input: str
```

- *Type:* str

---

##### `access_private_ip2_input`<sup>Optional</sup> <a name="access_private_ip2_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2Input"></a>

```python
access_private_ip2_input: str
```

- *Type:* str

---

##### `access_subnet_id_input`<sup>Optional</sup> <a name="access_subnet_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetIdInput"></a>

```python
access_subnet_id_input: str
```

- *Type:* str

---

##### `access_vpc_id_input`<sup>Optional</sup> <a name="access_vpc_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcIdInput"></a>

```python
access_vpc_id_input: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attachment_type_input`<sup>Optional</sup> <a name="attachment_type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentTypeInput"></a>

```python
attachment_type_input: str
```

- *Type:* str

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connect_subnet_input`<sup>Optional</sup> <a name="connect_subnet_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnetInput"></a>

```python
connect_subnet_input: str
```

- *Type:* str

---

##### `eip1_input`<sup>Optional</sup> <a name="eip1_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip1Input"></a>

```python
eip1_input: EnterpriseVpnGatewayV5Eip1
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

---

##### `eip2_input`<sup>Optional</sup> <a name="eip2_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.eip2Input"></a>

```python
eip2_input: EnterpriseVpnGatewayV5Eip2
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

---

##### `er_id_input`<sup>Optional</sup> <a name="er_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erIdInput"></a>

```python
er_id_input: str
```

- *Type:* str

---

##### `flavor_input`<sup>Optional</sup> <a name="flavor_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavorInput"></a>

```python
flavor_input: str
```

- *Type:* str

---

##### `ha_mode_input`<sup>Optional</sup> <a name="ha_mode_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haModeInput"></a>

```python
ha_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_subnets_input`<sup>Optional</sup> <a name="local_subnets_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnetsInput"></a>

```python
local_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EnterpriseVpnGatewayV5Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `access_private_ip1`<sup>Required</sup> <a name="access_private_ip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp1"></a>

```python
access_private_ip1: str
```

- *Type:* str

---

##### `access_private_ip2`<sup>Required</sup> <a name="access_private_ip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessPrivateIp2"></a>

```python
access_private_ip2: str
```

- *Type:* str

---

##### `access_subnet_id`<sup>Required</sup> <a name="access_subnet_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessSubnetId"></a>

```python
access_subnet_id: str
```

- *Type:* str

---

##### `access_vpc_id`<sup>Required</sup> <a name="access_vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.accessVpcId"></a>

```python
access_vpc_id: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connect_subnet`<sup>Required</sup> <a name="connect_subnet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.connectSubnet"></a>

```python
connect_subnet: str
```

- *Type:* str

---

##### `er_id`<sup>Required</sup> <a name="er_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.erId"></a>

```python
er_id: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `ha_mode`<sup>Required</sup> <a name="ha_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.haMode"></a>

```python
ha_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_subnets`<sup>Required</sup> <a name="local_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.localSubnets"></a>

```python
local_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnGatewayV5Config <a name="EnterpriseVpnGatewayV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zones: typing.List[str],
  name: str,
  access_private_ip1: str = None,
  access_private_ip2: str = None,
  access_subnet_id: str = None,
  access_vpc_id: str = None,
  asn: typing.Union[int, float] = None,
  attachment_type: str = None,
  connect_subnet: str = None,
  eip1: EnterpriseVpnGatewayV5Eip1 = None,
  eip2: EnterpriseVpnGatewayV5Eip2 = None,
  er_id: str = None,
  flavor: str = None,
  ha_mode: str = None,
  id: str = None,
  local_subnets: typing.List[str] = None,
  network_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: EnterpriseVpnGatewayV5Timeouts = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#availability_zones EnterpriseVpnGatewayV5#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#name EnterpriseVpnGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp1">access_private_ip1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_1 EnterpriseVpnGatewayV5#access_private_ip_1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp2">access_private_ip2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_2 EnterpriseVpnGatewayV5#access_private_ip_2}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessSubnetId">access_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_subnet_id EnterpriseVpnGatewayV5#access_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessVpcId">access_vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_vpc_id EnterpriseVpnGatewayV5#access_vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#asn EnterpriseVpnGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.attachmentType">attachment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#attachment_type EnterpriseVpnGatewayV5#attachment_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connectSubnet">connect_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#connect_subnet EnterpriseVpnGatewayV5#connect_subnet}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip1">eip1</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a></code> | eip1 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip2">eip2</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a></code> | eip2 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.erId">er_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#er_id EnterpriseVpnGatewayV5#er_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#flavor EnterpriseVpnGatewayV5#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.haMode">ha_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#ha_mode EnterpriseVpnGatewayV5#ha_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.localSubnets">local_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#local_subnets EnterpriseVpnGatewayV5#local_subnets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#network_type EnterpriseVpnGatewayV5#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#tags EnterpriseVpnGatewayV5#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#vpc_id EnterpriseVpnGatewayV5#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#availability_zones EnterpriseVpnGatewayV5#availability_zones}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#name EnterpriseVpnGatewayV5#name}.

---

##### `access_private_ip1`<sup>Optional</sup> <a name="access_private_ip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp1"></a>

```python
access_private_ip1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_1 EnterpriseVpnGatewayV5#access_private_ip_1}.

---

##### `access_private_ip2`<sup>Optional</sup> <a name="access_private_ip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessPrivateIp2"></a>

```python
access_private_ip2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_2 EnterpriseVpnGatewayV5#access_private_ip_2}.

---

##### `access_subnet_id`<sup>Optional</sup> <a name="access_subnet_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessSubnetId"></a>

```python
access_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_subnet_id EnterpriseVpnGatewayV5#access_subnet_id}.

---

##### `access_vpc_id`<sup>Optional</sup> <a name="access_vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.accessVpcId"></a>

```python
access_vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#access_vpc_id EnterpriseVpnGatewayV5#access_vpc_id}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#asn EnterpriseVpnGatewayV5#asn}.

---

##### `attachment_type`<sup>Optional</sup> <a name="attachment_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#attachment_type EnterpriseVpnGatewayV5#attachment_type}.

---

##### `connect_subnet`<sup>Optional</sup> <a name="connect_subnet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.connectSubnet"></a>

```python
connect_subnet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#connect_subnet EnterpriseVpnGatewayV5#connect_subnet}.

---

##### `eip1`<sup>Optional</sup> <a name="eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip1"></a>

```python
eip1: EnterpriseVpnGatewayV5Eip1
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

eip1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#eip1 EnterpriseVpnGatewayV5#eip1}

---

##### `eip2`<sup>Optional</sup> <a name="eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.eip2"></a>

```python
eip2: EnterpriseVpnGatewayV5Eip2
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

eip2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#eip2 EnterpriseVpnGatewayV5#eip2}

---

##### `er_id`<sup>Optional</sup> <a name="er_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.erId"></a>

```python
er_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#er_id EnterpriseVpnGatewayV5#er_id}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#flavor EnterpriseVpnGatewayV5#flavor}.

---

##### `ha_mode`<sup>Optional</sup> <a name="ha_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.haMode"></a>

```python
ha_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#ha_mode EnterpriseVpnGatewayV5#ha_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_subnets`<sup>Optional</sup> <a name="local_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.localSubnets"></a>

```python
local_subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#local_subnets EnterpriseVpnGatewayV5#local_subnets}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#network_type EnterpriseVpnGatewayV5#network_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#tags EnterpriseVpnGatewayV5#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.timeouts"></a>

```python
timeouts: EnterpriseVpnGatewayV5Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#timeouts EnterpriseVpnGatewayV5#timeouts}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#vpc_id EnterpriseVpnGatewayV5#vpc_id}.

---

### EnterpriseVpnGatewayV5Eip1 <a name="EnterpriseVpnGatewayV5Eip1" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1(
  bandwidth_name: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  charge_mode: str = None,
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthName">bandwidth_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.chargeMode">charge_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}. |

---

##### `bandwidth_name`<sup>Optional</sup> <a name="bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthName"></a>

```python
bandwidth_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}.

---

##### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}.

---

##### `charge_mode`<sup>Optional</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.chargeMode"></a>

```python
charge_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}.

---

### EnterpriseVpnGatewayV5Eip2 <a name="EnterpriseVpnGatewayV5Eip2" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2(
  bandwidth_name: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  charge_mode: str = None,
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthName">bandwidth_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.chargeMode">charge_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}. |

---

##### `bandwidth_name`<sup>Optional</sup> <a name="bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthName"></a>

```python
bandwidth_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}.

---

##### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}.

---

##### `charge_mode`<sup>Optional</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.chargeMode"></a>

```python
charge_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}.

---

### EnterpriseVpnGatewayV5Timeouts <a name="EnterpriseVpnGatewayV5Timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#create EnterpriseVpnGatewayV5#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#delete EnterpriseVpnGatewayV5#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#update EnterpriseVpnGatewayV5#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#create EnterpriseVpnGatewayV5#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#delete EnterpriseVpnGatewayV5#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_gateway_v5#update EnterpriseVpnGatewayV5#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnterpriseVpnGatewayV5Eip1OutputReference <a name="EnterpriseVpnGatewayV5Eip1OutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthName">reset_bandwidth_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthSize">reset_bandwidth_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetChargeMode">reset_charge_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bandwidth_name` <a name="reset_bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthName"></a>

```python
def reset_bandwidth_name() -> None
```

##### `reset_bandwidth_size` <a name="reset_bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetBandwidthSize"></a>

```python
def reset_bandwidth_size() -> None
```

##### `reset_charge_mode` <a name="reset_charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetChargeMode"></a>

```python
def reset_charge_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthId">bandwidth_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthNameInput">bandwidth_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSizeInput">bandwidth_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeModeInput">charge_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthName">bandwidth_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeMode">charge_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_id`<sup>Required</sup> <a name="bandwidth_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthId"></a>

```python
bandwidth_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_name_input`<sup>Optional</sup> <a name="bandwidth_name_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthNameInput"></a>

```python
bandwidth_name_input: str
```

- *Type:* str

---

##### `bandwidth_size_input`<sup>Optional</sup> <a name="bandwidth_size_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSizeInput"></a>

```python
bandwidth_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charge_mode_input`<sup>Optional</sup> <a name="charge_mode_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeModeInput"></a>

```python
charge_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bandwidth_name`<sup>Required</sup> <a name="bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthName"></a>

```python
bandwidth_name: str
```

- *Type:* str

---

##### `bandwidth_size`<sup>Required</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charge_mode`<sup>Required</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.chargeMode"></a>

```python
charge_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1OutputReference.property.internalValue"></a>

```python
internal_value: EnterpriseVpnGatewayV5Eip1
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip1">EnterpriseVpnGatewayV5Eip1</a>

---


### EnterpriseVpnGatewayV5Eip2OutputReference <a name="EnterpriseVpnGatewayV5Eip2OutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthName">reset_bandwidth_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthSize">reset_bandwidth_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetChargeMode">reset_charge_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bandwidth_name` <a name="reset_bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthName"></a>

```python
def reset_bandwidth_name() -> None
```

##### `reset_bandwidth_size` <a name="reset_bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetBandwidthSize"></a>

```python
def reset_bandwidth_size() -> None
```

##### `reset_charge_mode` <a name="reset_charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetChargeMode"></a>

```python
def reset_charge_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthId">bandwidth_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthNameInput">bandwidth_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSizeInput">bandwidth_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeModeInput">charge_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthName">bandwidth_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeMode">charge_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_id`<sup>Required</sup> <a name="bandwidth_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthId"></a>

```python
bandwidth_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bandwidth_name_input`<sup>Optional</sup> <a name="bandwidth_name_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthNameInput"></a>

```python
bandwidth_name_input: str
```

- *Type:* str

---

##### `bandwidth_size_input`<sup>Optional</sup> <a name="bandwidth_size_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSizeInput"></a>

```python
bandwidth_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charge_mode_input`<sup>Optional</sup> <a name="charge_mode_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeModeInput"></a>

```python
charge_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bandwidth_name`<sup>Required</sup> <a name="bandwidth_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthName"></a>

```python
bandwidth_name: str
```

- *Type:* str

---

##### `bandwidth_size`<sup>Required</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charge_mode`<sup>Required</sup> <a name="charge_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.chargeMode"></a>

```python
charge_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2OutputReference.property.internalValue"></a>

```python
internal_value: EnterpriseVpnGatewayV5Eip2
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Eip2">EnterpriseVpnGatewayV5Eip2</a>

---


### EnterpriseVpnGatewayV5TimeoutsOutputReference <a name="EnterpriseVpnGatewayV5TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_gateway_v5

enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EnterpriseVpnGatewayV5Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnGatewayV5.EnterpriseVpnGatewayV5Timeouts">EnterpriseVpnGatewayV5Timeouts</a>]

---



