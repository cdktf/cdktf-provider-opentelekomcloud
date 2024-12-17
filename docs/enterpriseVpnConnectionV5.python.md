# `enterpriseVpnConnectionV5` Submodule <a name="`enterpriseVpnConnectionV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnConnectionV5 <a name="EnterpriseVpnConnectionV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5 opentelekomcloud_enterprise_vpn_connection_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_gateway_id: str,
  gateway_id: str,
  gateway_ip: str,
  name: str,
  psk: str,
  vpn_type: str,
  enable_nqa: typing.Union[bool, IResolvable] = None,
  ha_role: str = None,
  id: str = None,
  ikepolicy: EnterpriseVpnConnectionV5Ikepolicy = None,
  ipsecpolicy: EnterpriseVpnConnectionV5Ipsecpolicy = None,
  peer_subnets: typing.List[str] = None,
  policy_rules: typing.Union[IResolvable, typing.List[EnterpriseVpnConnectionV5PolicyRules]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: EnterpriseVpnConnectionV5Timeouts = None,
  tunnel_local_address: str = None,
  tunnel_peer_address: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#customer_gateway_id EnterpriseVpnConnectionV5#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_id EnterpriseVpnConnectionV5#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_ip EnterpriseVpnConnectionV5#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#name EnterpriseVpnConnectionV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.psk">psk</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#psk EnterpriseVpnConnectionV5#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.vpnType">vpn_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#vpn_type EnterpriseVpnConnectionV5#vpn_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#enable_nqa EnterpriseVpnConnectionV5#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.haRole">ha_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ha_role EnterpriseVpnConnectionV5#ha_role}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#id EnterpriseVpnConnectionV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.ikepolicy">ikepolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a></code> | ikepolicy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.ipsecpolicy">ipsecpolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a></code> | ipsecpolicy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.peerSubnets">peer_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_subnets EnterpriseVpnConnectionV5#peer_subnets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.policyRules">policy_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]</code> | policy_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tags EnterpriseVpnConnectionV5#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.tunnelLocalAddress">tunnel_local_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_local_address EnterpriseVpnConnectionV5#tunnel_local_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.tunnelPeerAddress">tunnel_peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_peer_address EnterpriseVpnConnectionV5#tunnel_peer_address}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.customerGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#customer_gateway_id EnterpriseVpnConnectionV5#customer_gateway_id}.

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_id EnterpriseVpnConnectionV5#gateway_id}.

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.gatewayIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_ip EnterpriseVpnConnectionV5#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#name EnterpriseVpnConnectionV5#name}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.psk"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#psk EnterpriseVpnConnectionV5#psk}.

---

##### `vpn_type`<sup>Required</sup> <a name="vpn_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.vpnType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#vpn_type EnterpriseVpnConnectionV5#vpn_type}.

---

##### `enable_nqa`<sup>Optional</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.enableNqa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#enable_nqa EnterpriseVpnConnectionV5#enable_nqa}.

---

##### `ha_role`<sup>Optional</sup> <a name="ha_role" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.haRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ha_role EnterpriseVpnConnectionV5#ha_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#id EnterpriseVpnConnectionV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikepolicy`<sup>Optional</sup> <a name="ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.ikepolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

ikepolicy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ikepolicy EnterpriseVpnConnectionV5#ikepolicy}

---

##### `ipsecpolicy`<sup>Optional</sup> <a name="ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.ipsecpolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

ipsecpolicy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ipsecpolicy EnterpriseVpnConnectionV5#ipsecpolicy}

---

##### `peer_subnets`<sup>Optional</sup> <a name="peer_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.peerSubnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_subnets EnterpriseVpnConnectionV5#peer_subnets}.

---

##### `policy_rules`<sup>Optional</sup> <a name="policy_rules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.policyRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]

policy_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#policy_rules EnterpriseVpnConnectionV5#policy_rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tags EnterpriseVpnConnectionV5#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#timeouts EnterpriseVpnConnectionV5#timeouts}

---

##### `tunnel_local_address`<sup>Optional</sup> <a name="tunnel_local_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.tunnelLocalAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_local_address EnterpriseVpnConnectionV5#tunnel_local_address}.

---

##### `tunnel_peer_address`<sup>Optional</sup> <a name="tunnel_peer_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.tunnelPeerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_peer_address EnterpriseVpnConnectionV5#tunnel_peer_address}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy">put_ikepolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy">put_ipsecpolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putPolicyRules">put_policy_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetEnableNqa">reset_enable_nqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetHaRole">reset_ha_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIkepolicy">reset_ikepolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIpsecpolicy">reset_ipsecpolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPeerSubnets">reset_peer_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPolicyRules">reset_policy_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelLocalAddress">reset_tunnel_local_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelPeerAddress">reset_tunnel_peer_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ikepolicy` <a name="put_ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy"></a>

```python
def put_ikepolicy(
  authentication_algorithm: str = None,
  authentication_method: str = None,
  dh_group: str = None,
  dpd: EnterpriseVpnConnectionV5IkepolicyDpd = None,
  encryption_algorithm: str = None,
  ike_version: str = None,
  lifetime_seconds: typing.Union[int, float] = None,
  local_id: str = None,
  local_id_type: str = None,
  peer_id: str = None,
  peer_id_type: str = None,
  phase_one_negotiation_mode: str = None
) -> None
```

###### `authentication_algorithm`<sup>Optional</sup> <a name="authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.authenticationAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}.

---

###### `authentication_method`<sup>Optional</sup> <a name="authentication_method" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.authenticationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_method EnterpriseVpnConnectionV5#authentication_method}.

---

###### `dh_group`<sup>Optional</sup> <a name="dh_group" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.dhGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#dh_group EnterpriseVpnConnectionV5#dh_group}.

---

###### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.dpd"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#dpd EnterpriseVpnConnectionV5#dpd}

---

###### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.encryptionAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}.

---

###### `ike_version`<sup>Optional</sup> <a name="ike_version" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.ikeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ike_version EnterpriseVpnConnectionV5#ike_version}.

---

###### `lifetime_seconds`<sup>Optional</sup> <a name="lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.lifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}.

---

###### `local_id`<sup>Optional</sup> <a name="local_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.localId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#local_id EnterpriseVpnConnectionV5#local_id}.

---

###### `local_id_type`<sup>Optional</sup> <a name="local_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.localIdType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#local_id_type EnterpriseVpnConnectionV5#local_id_type}.

---

###### `peer_id`<sup>Optional</sup> <a name="peer_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.peerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_id EnterpriseVpnConnectionV5#peer_id}.

---

###### `peer_id_type`<sup>Optional</sup> <a name="peer_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.peerIdType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_id_type EnterpriseVpnConnectionV5#peer_id_type}.

---

###### `phase_one_negotiation_mode`<sup>Optional</sup> <a name="phase_one_negotiation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.phaseOneNegotiationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#phase_one_negotiation_mode EnterpriseVpnConnectionV5#phase_one_negotiation_mode}.

---

##### `put_ipsecpolicy` <a name="put_ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy"></a>

```python
def put_ipsecpolicy(
  authentication_algorithm: str = None,
  encapsulation_mode: str = None,
  encryption_algorithm: str = None,
  lifetime_seconds: typing.Union[int, float] = None,
  pfs: str = None,
  transform_protocol: str = None
) -> None
```

###### `authentication_algorithm`<sup>Optional</sup> <a name="authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy.parameter.authenticationAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}.

---

###### `encapsulation_mode`<sup>Optional</sup> <a name="encapsulation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy.parameter.encapsulationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encapsulation_mode EnterpriseVpnConnectionV5#encapsulation_mode}.

---

###### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy.parameter.encryptionAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}.

---

###### `lifetime_seconds`<sup>Optional</sup> <a name="lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy.parameter.lifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}.

---

###### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy.parameter.pfs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#pfs EnterpriseVpnConnectionV5#pfs}.

---

###### `transform_protocol`<sup>Optional</sup> <a name="transform_protocol" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy.parameter.transformProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#transform_protocol EnterpriseVpnConnectionV5#transform_protocol}.

---

##### `put_policy_rules` <a name="put_policy_rules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putPolicyRules"></a>

```python
def put_policy_rules(
  value: typing.Union[IResolvable, typing.List[EnterpriseVpnConnectionV5PolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putPolicyRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#create EnterpriseVpnConnectionV5#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#delete EnterpriseVpnConnectionV5#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#update EnterpriseVpnConnectionV5#update}.

---

##### `reset_enable_nqa` <a name="reset_enable_nqa" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetEnableNqa"></a>

```python
def reset_enable_nqa() -> None
```

##### `reset_ha_role` <a name="reset_ha_role" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetHaRole"></a>

```python
def reset_ha_role() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ikepolicy` <a name="reset_ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIkepolicy"></a>

```python
def reset_ikepolicy() -> None
```

##### `reset_ipsecpolicy` <a name="reset_ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIpsecpolicy"></a>

```python
def reset_ipsecpolicy() -> None
```

##### `reset_peer_subnets` <a name="reset_peer_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPeerSubnets"></a>

```python
def reset_peer_subnets() -> None
```

##### `reset_policy_rules` <a name="reset_policy_rules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPolicyRules"></a>

```python
def reset_policy_rules() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tunnel_local_address` <a name="reset_tunnel_local_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelLocalAddress"></a>

```python
def reset_tunnel_local_address() -> None
```

##### `reset_tunnel_peer_address` <a name="reset_tunnel_peer_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelPeerAddress"></a>

```python
def reset_tunnel_peer_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EnterpriseVpnConnectionV5 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EnterpriseVpnConnectionV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnterpriseVpnConnectionV5 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnterpriseVpnConnectionV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnConnectionV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicy">ikepolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference">EnterpriseVpnConnectionV5IkepolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicy">ipsecpolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference">EnterpriseVpnConnectionV5IpsecpolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRules">policy_rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList">EnterpriseVpnConnectionV5PolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference">EnterpriseVpnConnectionV5TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayIdInput">customer_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqaInput">enable_nqa_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIpInput">gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRoleInput">ha_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicyInput">ikepolicy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicyInput">ipsecpolicy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnetsInput">peer_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRulesInput">policy_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.pskInput">psk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddressInput">tunnel_local_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddressInput">tunnel_peer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnTypeInput">vpn_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRole">ha_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnets">peer_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.psk">psk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddress">tunnel_local_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddress">tunnel_peer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnType">vpn_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `ikepolicy`<sup>Required</sup> <a name="ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicy"></a>

```python
ikepolicy: EnterpriseVpnConnectionV5IkepolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference">EnterpriseVpnConnectionV5IkepolicyOutputReference</a>

---

##### `ipsecpolicy`<sup>Required</sup> <a name="ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicy"></a>

```python
ipsecpolicy: EnterpriseVpnConnectionV5IpsecpolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference">EnterpriseVpnConnectionV5IpsecpolicyOutputReference</a>

---

##### `policy_rules`<sup>Required</sup> <a name="policy_rules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRules"></a>

```python
policy_rules: EnterpriseVpnConnectionV5PolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList">EnterpriseVpnConnectionV5PolicyRulesList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeouts"></a>

```python
timeouts: EnterpriseVpnConnectionV5TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference">EnterpriseVpnConnectionV5TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `customer_gateway_id_input`<sup>Optional</sup> <a name="customer_gateway_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayIdInput"></a>

```python
customer_gateway_id_input: str
```

- *Type:* str

---

##### `enable_nqa_input`<sup>Optional</sup> <a name="enable_nqa_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqaInput"></a>

```python
enable_nqa_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `gateway_ip_input`<sup>Optional</sup> <a name="gateway_ip_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIpInput"></a>

```python
gateway_ip_input: str
```

- *Type:* str

---

##### `ha_role_input`<sup>Optional</sup> <a name="ha_role_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRoleInput"></a>

```python
ha_role_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ikepolicy_input`<sup>Optional</sup> <a name="ikepolicy_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicyInput"></a>

```python
ikepolicy_input: EnterpriseVpnConnectionV5Ikepolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

---

##### `ipsecpolicy_input`<sup>Optional</sup> <a name="ipsecpolicy_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicyInput"></a>

```python
ipsecpolicy_input: EnterpriseVpnConnectionV5Ipsecpolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peer_subnets_input`<sup>Optional</sup> <a name="peer_subnets_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnetsInput"></a>

```python
peer_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_rules_input`<sup>Optional</sup> <a name="policy_rules_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRulesInput"></a>

```python
policy_rules_input: typing.Union[IResolvable, typing.List[EnterpriseVpnConnectionV5PolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]

---

##### `psk_input`<sup>Optional</sup> <a name="psk_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.pskInput"></a>

```python
psk_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EnterpriseVpnConnectionV5Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>]

---

##### `tunnel_local_address_input`<sup>Optional</sup> <a name="tunnel_local_address_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddressInput"></a>

```python
tunnel_local_address_input: str
```

- *Type:* str

---

##### `tunnel_peer_address_input`<sup>Optional</sup> <a name="tunnel_peer_address_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddressInput"></a>

```python
tunnel_peer_address_input: str
```

- *Type:* str

---

##### `vpn_type_input`<sup>Optional</sup> <a name="vpn_type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnTypeInput"></a>

```python
vpn_type_input: str
```

- *Type:* str

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

---

##### `enable_nqa`<sup>Required</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqa"></a>

```python
enable_nqa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `ha_role`<sup>Required</sup> <a name="ha_role" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRole"></a>

```python
ha_role: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_subnets`<sup>Required</sup> <a name="peer_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnets"></a>

```python
peer_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.psk"></a>

```python
psk: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tunnel_local_address`<sup>Required</sup> <a name="tunnel_local_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddress"></a>

```python
tunnel_local_address: str
```

- *Type:* str

---

##### `tunnel_peer_address`<sup>Required</sup> <a name="tunnel_peer_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddress"></a>

```python
tunnel_peer_address: str
```

- *Type:* str

---

##### `vpn_type`<sup>Required</sup> <a name="vpn_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnType"></a>

```python
vpn_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnConnectionV5Config <a name="EnterpriseVpnConnectionV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_gateway_id: str,
  gateway_id: str,
  gateway_ip: str,
  name: str,
  psk: str,
  vpn_type: str,
  enable_nqa: typing.Union[bool, IResolvable] = None,
  ha_role: str = None,
  id: str = None,
  ikepolicy: EnterpriseVpnConnectionV5Ikepolicy = None,
  ipsecpolicy: EnterpriseVpnConnectionV5Ipsecpolicy = None,
  peer_subnets: typing.List[str] = None,
  policy_rules: typing.Union[IResolvable, typing.List[EnterpriseVpnConnectionV5PolicyRules]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: EnterpriseVpnConnectionV5Timeouts = None,
  tunnel_local_address: str = None,
  tunnel_peer_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#customer_gateway_id EnterpriseVpnConnectionV5#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_id EnterpriseVpnConnectionV5#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_ip EnterpriseVpnConnectionV5#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#name EnterpriseVpnConnectionV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.psk">psk</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#psk EnterpriseVpnConnectionV5#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.vpnType">vpn_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#vpn_type EnterpriseVpnConnectionV5#vpn_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.enableNqa">enable_nqa</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#enable_nqa EnterpriseVpnConnectionV5#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.haRole">ha_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ha_role EnterpriseVpnConnectionV5#ha_role}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#id EnterpriseVpnConnectionV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ikepolicy">ikepolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a></code> | ikepolicy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ipsecpolicy">ipsecpolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a></code> | ipsecpolicy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.peerSubnets">peer_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_subnets EnterpriseVpnConnectionV5#peer_subnets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.policyRules">policy_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]</code> | policy_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tags EnterpriseVpnConnectionV5#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelLocalAddress">tunnel_local_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_local_address EnterpriseVpnConnectionV5#tunnel_local_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelPeerAddress">tunnel_peer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_peer_address EnterpriseVpnConnectionV5#tunnel_peer_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#customer_gateway_id EnterpriseVpnConnectionV5#customer_gateway_id}.

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_id EnterpriseVpnConnectionV5#gateway_id}.

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#gateway_ip EnterpriseVpnConnectionV5#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#name EnterpriseVpnConnectionV5#name}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.psk"></a>

```python
psk: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#psk EnterpriseVpnConnectionV5#psk}.

---

##### `vpn_type`<sup>Required</sup> <a name="vpn_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.vpnType"></a>

```python
vpn_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#vpn_type EnterpriseVpnConnectionV5#vpn_type}.

---

##### `enable_nqa`<sup>Optional</sup> <a name="enable_nqa" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.enableNqa"></a>

```python
enable_nqa: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#enable_nqa EnterpriseVpnConnectionV5#enable_nqa}.

---

##### `ha_role`<sup>Optional</sup> <a name="ha_role" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.haRole"></a>

```python
ha_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ha_role EnterpriseVpnConnectionV5#ha_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#id EnterpriseVpnConnectionV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikepolicy`<sup>Optional</sup> <a name="ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ikepolicy"></a>

```python
ikepolicy: EnterpriseVpnConnectionV5Ikepolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

ikepolicy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ikepolicy EnterpriseVpnConnectionV5#ikepolicy}

---

##### `ipsecpolicy`<sup>Optional</sup> <a name="ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ipsecpolicy"></a>

```python
ipsecpolicy: EnterpriseVpnConnectionV5Ipsecpolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

ipsecpolicy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ipsecpolicy EnterpriseVpnConnectionV5#ipsecpolicy}

---

##### `peer_subnets`<sup>Optional</sup> <a name="peer_subnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.peerSubnets"></a>

```python
peer_subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_subnets EnterpriseVpnConnectionV5#peer_subnets}.

---

##### `policy_rules`<sup>Optional</sup> <a name="policy_rules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.policyRules"></a>

```python
policy_rules: typing.Union[IResolvable, typing.List[EnterpriseVpnConnectionV5PolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]

policy_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#policy_rules EnterpriseVpnConnectionV5#policy_rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tags EnterpriseVpnConnectionV5#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.timeouts"></a>

```python
timeouts: EnterpriseVpnConnectionV5Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#timeouts EnterpriseVpnConnectionV5#timeouts}

---

##### `tunnel_local_address`<sup>Optional</sup> <a name="tunnel_local_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelLocalAddress"></a>

```python
tunnel_local_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_local_address EnterpriseVpnConnectionV5#tunnel_local_address}.

---

##### `tunnel_peer_address`<sup>Optional</sup> <a name="tunnel_peer_address" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelPeerAddress"></a>

```python
tunnel_peer_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#tunnel_peer_address EnterpriseVpnConnectionV5#tunnel_peer_address}.

---

### EnterpriseVpnConnectionV5Ikepolicy <a name="EnterpriseVpnConnectionV5Ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy(
  authentication_algorithm: str = None,
  authentication_method: str = None,
  dh_group: str = None,
  dpd: EnterpriseVpnConnectionV5IkepolicyDpd = None,
  encryption_algorithm: str = None,
  ike_version: str = None,
  lifetime_seconds: typing.Union[int, float] = None,
  local_id: str = None,
  local_id_type: str = None,
  peer_id: str = None,
  peer_id_type: str = None,
  phase_one_negotiation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationAlgorithm">authentication_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_method EnterpriseVpnConnectionV5#authentication_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dhGroup">dh_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#dh_group EnterpriseVpnConnectionV5#dh_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dpd">dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a></code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.ikeVersion">ike_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ike_version EnterpriseVpnConnectionV5#ike_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.lifetimeSeconds">lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localId">local_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#local_id EnterpriseVpnConnectionV5#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localIdType">local_id_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#local_id_type EnterpriseVpnConnectionV5#local_id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerId">peer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_id EnterpriseVpnConnectionV5#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerIdType">peer_id_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_id_type EnterpriseVpnConnectionV5#peer_id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.phaseOneNegotiationMode">phase_one_negotiation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#phase_one_negotiation_mode EnterpriseVpnConnectionV5#phase_one_negotiation_mode}. |

---

##### `authentication_algorithm`<sup>Optional</sup> <a name="authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationAlgorithm"></a>

```python
authentication_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}.

---

##### `authentication_method`<sup>Optional</sup> <a name="authentication_method" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_method EnterpriseVpnConnectionV5#authentication_method}.

---

##### `dh_group`<sup>Optional</sup> <a name="dh_group" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#dh_group EnterpriseVpnConnectionV5#dh_group}.

---

##### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dpd"></a>

```python
dpd: EnterpriseVpnConnectionV5IkepolicyDpd
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#dpd EnterpriseVpnConnectionV5#dpd}

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}.

---

##### `ike_version`<sup>Optional</sup> <a name="ike_version" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.ikeVersion"></a>

```python
ike_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#ike_version EnterpriseVpnConnectionV5#ike_version}.

---

##### `lifetime_seconds`<sup>Optional</sup> <a name="lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.lifetimeSeconds"></a>

```python
lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}.

---

##### `local_id`<sup>Optional</sup> <a name="local_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localId"></a>

```python
local_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#local_id EnterpriseVpnConnectionV5#local_id}.

---

##### `local_id_type`<sup>Optional</sup> <a name="local_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localIdType"></a>

```python
local_id_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#local_id_type EnterpriseVpnConnectionV5#local_id_type}.

---

##### `peer_id`<sup>Optional</sup> <a name="peer_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_id EnterpriseVpnConnectionV5#peer_id}.

---

##### `peer_id_type`<sup>Optional</sup> <a name="peer_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerIdType"></a>

```python
peer_id_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#peer_id_type EnterpriseVpnConnectionV5#peer_id_type}.

---

##### `phase_one_negotiation_mode`<sup>Optional</sup> <a name="phase_one_negotiation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.phaseOneNegotiationMode"></a>

```python
phase_one_negotiation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#phase_one_negotiation_mode EnterpriseVpnConnectionV5#phase_one_negotiation_mode}.

---

### EnterpriseVpnConnectionV5IkepolicyDpd <a name="EnterpriseVpnConnectionV5IkepolicyDpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd(
  interval: typing.Union[int, float] = None,
  msg: str = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#interval EnterpriseVpnConnectionV5#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.msg">msg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#msg EnterpriseVpnConnectionV5#msg}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#timeout EnterpriseVpnConnectionV5#timeout}. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#interval EnterpriseVpnConnectionV5#interval}.

---

##### `msg`<sup>Optional</sup> <a name="msg" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.msg"></a>

```python
msg: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#msg EnterpriseVpnConnectionV5#msg}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#timeout EnterpriseVpnConnectionV5#timeout}.

---

### EnterpriseVpnConnectionV5Ipsecpolicy <a name="EnterpriseVpnConnectionV5Ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy(
  authentication_algorithm: str = None,
  encapsulation_mode: str = None,
  encryption_algorithm: str = None,
  lifetime_seconds: typing.Union[int, float] = None,
  pfs: str = None,
  transform_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.authenticationAlgorithm">authentication_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encapsulationMode">encapsulation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encapsulation_mode EnterpriseVpnConnectionV5#encapsulation_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.lifetimeSeconds">lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.pfs">pfs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#pfs EnterpriseVpnConnectionV5#pfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.transformProtocol">transform_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#transform_protocol EnterpriseVpnConnectionV5#transform_protocol}. |

---

##### `authentication_algorithm`<sup>Optional</sup> <a name="authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.authenticationAlgorithm"></a>

```python
authentication_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}.

---

##### `encapsulation_mode`<sup>Optional</sup> <a name="encapsulation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encapsulationMode"></a>

```python
encapsulation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encapsulation_mode EnterpriseVpnConnectionV5#encapsulation_mode}.

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}.

---

##### `lifetime_seconds`<sup>Optional</sup> <a name="lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.lifetimeSeconds"></a>

```python
lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}.

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.pfs"></a>

```python
pfs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#pfs EnterpriseVpnConnectionV5#pfs}.

---

##### `transform_protocol`<sup>Optional</sup> <a name="transform_protocol" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.transformProtocol"></a>

```python
transform_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#transform_protocol EnterpriseVpnConnectionV5#transform_protocol}.

---

### EnterpriseVpnConnectionV5PolicyRules <a name="EnterpriseVpnConnectionV5PolicyRules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules(
  destination: typing.List[str] = None,
  rule_index: typing.Union[int, float] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.destination">destination</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#destination EnterpriseVpnConnectionV5#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.ruleIndex">rule_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#rule_index EnterpriseVpnConnectionV5#rule_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#source EnterpriseVpnConnectionV5#source}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.destination"></a>

```python
destination: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#destination EnterpriseVpnConnectionV5#destination}.

---

##### `rule_index`<sup>Optional</sup> <a name="rule_index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.ruleIndex"></a>

```python
rule_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#rule_index EnterpriseVpnConnectionV5#rule_index}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#source EnterpriseVpnConnectionV5#source}.

---

### EnterpriseVpnConnectionV5Timeouts <a name="EnterpriseVpnConnectionV5Timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#create EnterpriseVpnConnectionV5#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#delete EnterpriseVpnConnectionV5#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#update EnterpriseVpnConnectionV5#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#create EnterpriseVpnConnectionV5#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#delete EnterpriseVpnConnectionV5#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#update EnterpriseVpnConnectionV5#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnterpriseVpnConnectionV5IkepolicyDpdOutputReference <a name="EnterpriseVpnConnectionV5IkepolicyDpdOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetMsg">reset_msg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_msg` <a name="reset_msg" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetMsg"></a>

```python
def reset_msg() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msgInput">msg_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msg">msg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `msg_input`<sup>Optional</sup> <a name="msg_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msgInput"></a>

```python
msg_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `msg`<sup>Required</sup> <a name="msg" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msg"></a>

```python
msg: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.internalValue"></a>

```python
internal_value: EnterpriseVpnConnectionV5IkepolicyDpd
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

---


### EnterpriseVpnConnectionV5IkepolicyOutputReference <a name="EnterpriseVpnConnectionV5IkepolicyOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd">put_dpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationAlgorithm">reset_authentication_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationMethod">reset_authentication_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDhGroup">reset_dh_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDpd">reset_dpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetIkeVersion">reset_ike_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLifetimeSeconds">reset_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalId">reset_local_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalIdType">reset_local_id_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerId">reset_peer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerIdType">reset_peer_id_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPhaseOneNegotiationMode">reset_phase_one_negotiation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dpd` <a name="put_dpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd"></a>

```python
def put_dpd(
  interval: typing.Union[int, float] = None,
  msg: str = None,
  timeout: typing.Union[int, float] = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#interval EnterpriseVpnConnectionV5#interval}.

---

###### `msg`<sup>Optional</sup> <a name="msg" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd.parameter.msg"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#msg EnterpriseVpnConnectionV5#msg}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/enterprise_vpn_connection_v5#timeout EnterpriseVpnConnectionV5#timeout}.

---

##### `reset_authentication_algorithm` <a name="reset_authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationAlgorithm"></a>

```python
def reset_authentication_algorithm() -> None
```

##### `reset_authentication_method` <a name="reset_authentication_method" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationMethod"></a>

```python
def reset_authentication_method() -> None
```

##### `reset_dh_group` <a name="reset_dh_group" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDhGroup"></a>

```python
def reset_dh_group() -> None
```

##### `reset_dpd` <a name="reset_dpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDpd"></a>

```python
def reset_dpd() -> None
```

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_ike_version` <a name="reset_ike_version" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetIkeVersion"></a>

```python
def reset_ike_version() -> None
```

##### `reset_lifetime_seconds` <a name="reset_lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLifetimeSeconds"></a>

```python
def reset_lifetime_seconds() -> None
```

##### `reset_local_id` <a name="reset_local_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalId"></a>

```python
def reset_local_id() -> None
```

##### `reset_local_id_type` <a name="reset_local_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalIdType"></a>

```python
def reset_local_id_type() -> None
```

##### `reset_peer_id` <a name="reset_peer_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerId"></a>

```python
def reset_peer_id() -> None
```

##### `reset_peer_id_type` <a name="reset_peer_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerIdType"></a>

```python
def reset_peer_id_type() -> None
```

##### `reset_phase_one_negotiation_mode` <a name="reset_phase_one_negotiation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPhaseOneNegotiationMode"></a>

```python
def reset_phase_one_negotiation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpd">dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference">EnterpriseVpnConnectionV5IkepolicyDpdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithmInput">authentication_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethodInput">authentication_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroupInput">dh_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpdInput">dpd_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersionInput">ike_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSecondsInput">lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdInput">local_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdTypeInput">local_id_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdInput">peer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdTypeInput">peer_id_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationModeInput">phase_one_negotiation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithm">authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersion">ike_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSeconds">lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localId">local_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdType">local_id_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerId">peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdType">peer_id_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationMode">phase_one_negotiation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dpd`<sup>Required</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpd"></a>

```python
dpd: EnterpriseVpnConnectionV5IkepolicyDpdOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference">EnterpriseVpnConnectionV5IkepolicyDpdOutputReference</a>

---

##### `authentication_algorithm_input`<sup>Optional</sup> <a name="authentication_algorithm_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithmInput"></a>

```python
authentication_algorithm_input: str
```

- *Type:* str

---

##### `authentication_method_input`<sup>Optional</sup> <a name="authentication_method_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethodInput"></a>

```python
authentication_method_input: str
```

- *Type:* str

---

##### `dh_group_input`<sup>Optional</sup> <a name="dh_group_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroupInput"></a>

```python
dh_group_input: str
```

- *Type:* str

---

##### `dpd_input`<sup>Optional</sup> <a name="dpd_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpdInput"></a>

```python
dpd_input: EnterpriseVpnConnectionV5IkepolicyDpd
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `ike_version_input`<sup>Optional</sup> <a name="ike_version_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersionInput"></a>

```python
ike_version_input: str
```

- *Type:* str

---

##### `lifetime_seconds_input`<sup>Optional</sup> <a name="lifetime_seconds_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSecondsInput"></a>

```python
lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_id_input`<sup>Optional</sup> <a name="local_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdInput"></a>

```python
local_id_input: str
```

- *Type:* str

---

##### `local_id_type_input`<sup>Optional</sup> <a name="local_id_type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdTypeInput"></a>

```python
local_id_type_input: str
```

- *Type:* str

---

##### `peer_id_input`<sup>Optional</sup> <a name="peer_id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdInput"></a>

```python
peer_id_input: str
```

- *Type:* str

---

##### `peer_id_type_input`<sup>Optional</sup> <a name="peer_id_type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdTypeInput"></a>

```python
peer_id_type_input: str
```

- *Type:* str

---

##### `phase_one_negotiation_mode_input`<sup>Optional</sup> <a name="phase_one_negotiation_mode_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationModeInput"></a>

```python
phase_one_negotiation_mode_input: str
```

- *Type:* str

---

##### `authentication_algorithm`<sup>Required</sup> <a name="authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithm"></a>

```python
authentication_algorithm: str
```

- *Type:* str

---

##### `authentication_method`<sup>Required</sup> <a name="authentication_method" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `ike_version`<sup>Required</sup> <a name="ike_version" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersion"></a>

```python
ike_version: str
```

- *Type:* str

---

##### `lifetime_seconds`<sup>Required</sup> <a name="lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSeconds"></a>

```python
lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_id`<sup>Required</sup> <a name="local_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localId"></a>

```python
local_id: str
```

- *Type:* str

---

##### `local_id_type`<sup>Required</sup> <a name="local_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdType"></a>

```python
local_id_type: str
```

- *Type:* str

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

---

##### `peer_id_type`<sup>Required</sup> <a name="peer_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdType"></a>

```python
peer_id_type: str
```

- *Type:* str

---

##### `phase_one_negotiation_mode`<sup>Required</sup> <a name="phase_one_negotiation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationMode"></a>

```python
phase_one_negotiation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.internalValue"></a>

```python
internal_value: EnterpriseVpnConnectionV5Ikepolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

---


### EnterpriseVpnConnectionV5IpsecpolicyOutputReference <a name="EnterpriseVpnConnectionV5IpsecpolicyOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetAuthenticationAlgorithm">reset_authentication_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncapsulationMode">reset_encapsulation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetLifetimeSeconds">reset_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetPfs">reset_pfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetTransformProtocol">reset_transform_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_algorithm` <a name="reset_authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetAuthenticationAlgorithm"></a>

```python
def reset_authentication_algorithm() -> None
```

##### `reset_encapsulation_mode` <a name="reset_encapsulation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncapsulationMode"></a>

```python
def reset_encapsulation_mode() -> None
```

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_lifetime_seconds` <a name="reset_lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetLifetimeSeconds"></a>

```python
def reset_lifetime_seconds() -> None
```

##### `reset_pfs` <a name="reset_pfs" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetPfs"></a>

```python
def reset_pfs() -> None
```

##### `reset_transform_protocol` <a name="reset_transform_protocol" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetTransformProtocol"></a>

```python
def reset_transform_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithmInput">authentication_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationModeInput">encapsulation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSecondsInput">lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfsInput">pfs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocolInput">transform_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithm">authentication_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationMode">encapsulation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSeconds">lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfs">pfs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocol">transform_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_algorithm_input`<sup>Optional</sup> <a name="authentication_algorithm_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithmInput"></a>

```python
authentication_algorithm_input: str
```

- *Type:* str

---

##### `encapsulation_mode_input`<sup>Optional</sup> <a name="encapsulation_mode_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationModeInput"></a>

```python
encapsulation_mode_input: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `lifetime_seconds_input`<sup>Optional</sup> <a name="lifetime_seconds_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSecondsInput"></a>

```python
lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pfs_input`<sup>Optional</sup> <a name="pfs_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfsInput"></a>

```python
pfs_input: str
```

- *Type:* str

---

##### `transform_protocol_input`<sup>Optional</sup> <a name="transform_protocol_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocolInput"></a>

```python
transform_protocol_input: str
```

- *Type:* str

---

##### `authentication_algorithm`<sup>Required</sup> <a name="authentication_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithm"></a>

```python
authentication_algorithm: str
```

- *Type:* str

---

##### `encapsulation_mode`<sup>Required</sup> <a name="encapsulation_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationMode"></a>

```python
encapsulation_mode: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `lifetime_seconds`<sup>Required</sup> <a name="lifetime_seconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSeconds"></a>

```python
lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfs"></a>

```python
pfs: str
```

- *Type:* str

---

##### `transform_protocol`<sup>Required</sup> <a name="transform_protocol" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocol"></a>

```python
transform_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.internalValue"></a>

```python
internal_value: EnterpriseVpnConnectionV5Ipsecpolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

---


### EnterpriseVpnConnectionV5PolicyRulesList <a name="EnterpriseVpnConnectionV5PolicyRulesList" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EnterpriseVpnConnectionV5PolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EnterpriseVpnConnectionV5PolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]]

---


### EnterpriseVpnConnectionV5PolicyRulesOutputReference <a name="EnterpriseVpnConnectionV5PolicyRulesOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetRuleIndex">reset_rule_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_rule_index` <a name="reset_rule_index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetRuleIndex"></a>

```python
def reset_rule_index() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destinationInput">destination_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.ruleIndexInput">rule_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destination">destination</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.ruleIndex">rule_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destinationInput"></a>

```python
destination_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_index_input`<sup>Optional</sup> <a name="rule_index_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.ruleIndexInput"></a>

```python
rule_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destination"></a>

```python
destination: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_index`<sup>Required</sup> <a name="rule_index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.ruleIndex"></a>

```python
rule_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EnterpriseVpnConnectionV5PolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>]

---


### EnterpriseVpnConnectionV5TimeoutsOutputReference <a name="EnterpriseVpnConnectionV5TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_connection_v5

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EnterpriseVpnConnectionV5Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>]

---



