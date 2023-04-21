# `opentelekomcloud_networking_secgroup_rule_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_networking_secgroup_rule_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2).

# `networkingSecgroupRuleV2` Submodule <a name="`networkingSecgroupRuleV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingSecgroupRuleV2 <a name="NetworkingSecgroupRuleV2" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2 opentelekomcloud_networking_secgroup_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_secgroup_rule_v2

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  direction: str,
  ethertype: str,
  security_group_id: str,
  description: str = None,
  id: str = None,
  port_range_max: typing.Union[int, float] = None,
  port_range_min: typing.Union[int, float] = None,
  protocol: str = None,
  region: str = None,
  remote_group_id: str = None,
  remote_ip_prefix: str = None,
  tenant_id: str = None,
  timeouts: NetworkingSecgroupRuleV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#direction NetworkingSecgroupRuleV2#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.ethertype">ethertype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#ethertype NetworkingSecgroupRuleV2#ethertype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#security_group_id NetworkingSecgroupRuleV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#description NetworkingSecgroupRuleV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#id NetworkingSecgroupRuleV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.portRangeMax">port_range_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_max NetworkingSecgroupRuleV2#port_range_max}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.portRangeMin">port_range_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_min NetworkingSecgroupRuleV2#port_range_min}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#protocol NetworkingSecgroupRuleV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#region NetworkingSecgroupRuleV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.remoteGroupId">remote_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.remoteIpPrefix">remote_ip_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#tenant_id NetworkingSecgroupRuleV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.direction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#direction NetworkingSecgroupRuleV2#direction}.

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.ethertype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#ethertype NetworkingSecgroupRuleV2#ethertype}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#security_group_id NetworkingSecgroupRuleV2#security_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#description NetworkingSecgroupRuleV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#id NetworkingSecgroupRuleV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port_range_max`<sup>Optional</sup> <a name="port_range_max" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.portRangeMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_max NetworkingSecgroupRuleV2#port_range_max}.

---

##### `port_range_min`<sup>Optional</sup> <a name="port_range_min" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.portRangeMin"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_min NetworkingSecgroupRuleV2#port_range_min}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#protocol NetworkingSecgroupRuleV2#protocol}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#region NetworkingSecgroupRuleV2#region}.

---

##### `remote_group_id`<sup>Optional</sup> <a name="remote_group_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.remoteGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}.

---

##### `remote_ip_prefix`<sup>Optional</sup> <a name="remote_ip_prefix" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.remoteIpPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#tenant_id NetworkingSecgroupRuleV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#timeouts NetworkingSecgroupRuleV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMax">reset_port_range_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMin">reset_port_range_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteGroupId">reset_remote_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteIpPrefix">reset_remote_ip_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#delete NetworkingSecgroupRuleV2#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port_range_max` <a name="reset_port_range_max" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMax"></a>

```python
def reset_port_range_max() -> None
```

##### `reset_port_range_min` <a name="reset_port_range_min" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMin"></a>

```python
def reset_port_range_min() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_remote_group_id` <a name="reset_remote_group_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteGroupId"></a>

```python
def reset_remote_group_id() -> None
```

##### `reset_remote_ip_prefix` <a name="reset_remote_ip_prefix" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteIpPrefix"></a>

```python
def reset_remote_ip_prefix() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_secgroup_rule_v2

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_secgroup_rule_v2

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_secgroup_rule_v2

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference">NetworkingSecgroupRuleV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertypeInput">ethertype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMaxInput">port_range_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMinInput">port_range_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupIdInput">remote_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefixInput">remote_ip_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertype">ethertype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMax">port_range_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMin">port_range_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupId">remote_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefix">remote_ip_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeouts"></a>

```python
timeouts: NetworkingSecgroupRuleV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference">NetworkingSecgroupRuleV2TimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `ethertype_input`<sup>Optional</sup> <a name="ethertype_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertypeInput"></a>

```python
ethertype_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_range_max_input`<sup>Optional</sup> <a name="port_range_max_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMaxInput"></a>

```python
port_range_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_min_input`<sup>Optional</sup> <a name="port_range_min_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMinInput"></a>

```python
port_range_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `remote_group_id_input`<sup>Optional</sup> <a name="remote_group_id_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupIdInput"></a>

```python
remote_group_id_input: str
```

- *Type:* str

---

##### `remote_ip_prefix_input`<sup>Optional</sup> <a name="remote_ip_prefix_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefixInput"></a>

```python
remote_ip_prefix_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkingSecgroupRuleV2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertype"></a>

```python
ethertype: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port_range_max`<sup>Required</sup> <a name="port_range_max" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMax"></a>

```python
port_range_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_min`<sup>Required</sup> <a name="port_range_min" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMin"></a>

```python
port_range_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `remote_group_id`<sup>Required</sup> <a name="remote_group_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupId"></a>

```python
remote_group_id: str
```

- *Type:* str

---

##### `remote_ip_prefix`<sup>Required</sup> <a name="remote_ip_prefix" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefix"></a>

```python
remote_ip_prefix: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingSecgroupRuleV2Config <a name="NetworkingSecgroupRuleV2Config" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_secgroup_rule_v2

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  direction: str,
  ethertype: str,
  security_group_id: str,
  description: str = None,
  id: str = None,
  port_range_max: typing.Union[int, float] = None,
  port_range_min: typing.Union[int, float] = None,
  protocol: str = None,
  region: str = None,
  remote_group_id: str = None,
  remote_ip_prefix: str = None,
  tenant_id: str = None,
  timeouts: NetworkingSecgroupRuleV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#direction NetworkingSecgroupRuleV2#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.ethertype">ethertype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#ethertype NetworkingSecgroupRuleV2#ethertype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#security_group_id NetworkingSecgroupRuleV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#description NetworkingSecgroupRuleV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#id NetworkingSecgroupRuleV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMax">port_range_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_max NetworkingSecgroupRuleV2#port_range_max}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMin">port_range_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_min NetworkingSecgroupRuleV2#port_range_min}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#protocol NetworkingSecgroupRuleV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#region NetworkingSecgroupRuleV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteGroupId">remote_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteIpPrefix">remote_ip_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#tenant_id NetworkingSecgroupRuleV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#direction NetworkingSecgroupRuleV2#direction}.

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.ethertype"></a>

```python
ethertype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#ethertype NetworkingSecgroupRuleV2#ethertype}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#security_group_id NetworkingSecgroupRuleV2#security_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#description NetworkingSecgroupRuleV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#id NetworkingSecgroupRuleV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port_range_max`<sup>Optional</sup> <a name="port_range_max" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMax"></a>

```python
port_range_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_max NetworkingSecgroupRuleV2#port_range_max}.

---

##### `port_range_min`<sup>Optional</sup> <a name="port_range_min" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMin"></a>

```python
port_range_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#port_range_min NetworkingSecgroupRuleV2#port_range_min}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#protocol NetworkingSecgroupRuleV2#protocol}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#region NetworkingSecgroupRuleV2#region}.

---

##### `remote_group_id`<sup>Optional</sup> <a name="remote_group_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteGroupId"></a>

```python
remote_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}.

---

##### `remote_ip_prefix`<sup>Optional</sup> <a name="remote_ip_prefix" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteIpPrefix"></a>

```python
remote_ip_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#tenant_id NetworkingSecgroupRuleV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.timeouts"></a>

```python
timeouts: NetworkingSecgroupRuleV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#timeouts NetworkingSecgroupRuleV2#timeouts}

---

### NetworkingSecgroupRuleV2Timeouts <a name="NetworkingSecgroupRuleV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_secgroup_rule_v2

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#delete NetworkingSecgroupRuleV2#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_secgroup_rule_v2#delete NetworkingSecgroupRuleV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingSecgroupRuleV2TimeoutsOutputReference <a name="NetworkingSecgroupRuleV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_secgroup_rule_v2

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkingSecgroupRuleV2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>, cdktf.IResolvable]

---



