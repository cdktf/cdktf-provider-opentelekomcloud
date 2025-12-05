# `cfwAclRuleV1` Submodule <a name="`cfwAclRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwAclRuleV1 <a name="CfwAclRuleV1" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1 opentelekomcloud_cfw_acl_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_type: typing.Union[int, float],
  address_type: typing.Union[int, float],
  destination: CfwAclRuleV1Destination,
  long_connect_enable: typing.Union[int, float],
  name: str,
  object_id: str,
  sequence: CfwAclRuleV1Sequence,
  service: CfwAclRuleV1Service,
  source: CfwAclRuleV1Source,
  status: typing.Union[int, float],
  type: typing.Union[int, float],
  applications: typing.List[str] = None,
  applications_json_string: str = None,
  description: str = None,
  direction: typing.Union[int, float] = None,
  long_connect_time: typing.Union[int, float] = None,
  long_connect_time_hour: typing.Union[int, float] = None,
  long_connect_time_minute: typing.Union[int, float] = None,
  long_connect_time_second: typing.Union[int, float] = None,
  timeouts: CfwAclRuleV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.actionType">action_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectEnable">long_connect_enable</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | sequence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | source block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.status">status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applications">applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applicationsJsonString">applications_json_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.direction">direction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTime">long_connect_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeHour">long_connect_time_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeMinute">long_connect_time_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeSecond">long_connect_time_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.actionType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}.

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.addressType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#destination CfwAclRuleV1#destination}

---

##### `long_connect_enable`<sup>Required</sup> <a name="long_connect_enable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectEnable"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}.

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.sequence"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#sequence CfwAclRuleV1#sequence}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.service"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service CfwAclRuleV1#service}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source CfwAclRuleV1#source}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.status"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applications"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}.

---

##### `applications_json_string`<sup>Optional</sup> <a name="applications_json_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applicationsJsonString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.direction"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}.

---

##### `long_connect_time`<sup>Optional</sup> <a name="long_connect_time" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}.

---

##### `long_connect_time_hour`<sup>Optional</sup> <a name="long_connect_time_hour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}.

---

##### `long_connect_time_minute`<sup>Optional</sup> <a name="long_connect_time_minute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}.

---

##### `long_connect_time_second`<sup>Optional</sup> <a name="long_connect_time_second" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#timeouts CfwAclRuleV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence">put_sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService">put_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications">reset_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString">reset_applications_json_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime">reset_long_connect_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour">reset_long_connect_time_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute">reset_long_connect_time_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond">reset_long_connect_time_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination"></a>

```python
def put_destination(
  type: typing.Union[int, float],
  address: str = None,
  address_group: typing.List[str] = None,
  address_set_id: str = None,
  address_set_name: str = None,
  address_set_type: typing.Union[int, float] = None,
  address_type: typing.Union[int, float] = None,
  domain_address_name: str = None,
  domain_set_id: str = None,
  domain_set_name: str = None,
  ip_address: typing.List[str] = None,
  predefined_group: typing.List[str] = None,
  region_list: IResolvable | typing.List[CfwAclRuleV1DestinationRegionListStruct] = None,
  region_list_json: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

###### `address_group`<sup>Optional</sup> <a name="address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.addressGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

###### `address_set_id`<sup>Optional</sup> <a name="address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.addressSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

###### `address_set_name`<sup>Optional</sup> <a name="address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.addressSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

###### `address_set_type`<sup>Optional</sup> <a name="address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.addressSetType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

###### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.addressType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

###### `domain_address_name`<sup>Optional</sup> <a name="domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.domainAddressName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

###### `domain_set_id`<sup>Optional</sup> <a name="domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.domainSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

###### `domain_set_name`<sup>Optional</sup> <a name="domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.domainSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.ipAddress"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

###### `predefined_group`<sup>Optional</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.predefinedGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

###### `region_list`<sup>Optional</sup> <a name="region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.regionList"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

###### `region_list_json`<sup>Optional</sup> <a name="region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.regionListJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

##### `put_sequence` <a name="put_sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence"></a>

```python
def put_sequence(
  bottom: typing.Union[int, float] = None,
  dest_rule_id: str = None,
  top: typing.Union[int, float] = None
) -> None
```

###### `bottom`<sup>Optional</sup> <a name="bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence.parameter.bottom"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}.

---

###### `dest_rule_id`<sup>Optional</sup> <a name="dest_rule_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence.parameter.destRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}.

---

###### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence.parameter.top"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}.

---

##### `put_service` <a name="put_service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService"></a>

```python
def put_service(
  type: typing.Union[int, float],
  custom_service: IResolvable | typing.List[CfwAclRuleV1ServiceCustomService] = None,
  dest_port: str = None,
  predefined_group: typing.List[str] = None,
  protocol: typing.Union[int, float] = None,
  protocols: typing.List[typing.Union[int, float]] = None,
  service_group: typing.List[str] = None,
  service_group_names: IResolvable | typing.List[CfwAclRuleV1ServiceServiceGroupNames] = None,
  service_set_id: str = None,
  service_set_name: str = None,
  service_set_type: typing.Union[int, float] = None,
  source_port: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

###### `custom_service`<sup>Optional</sup> <a name="custom_service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.customService"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]

custom_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#custom_service CfwAclRuleV1#custom_service}

---

###### `dest_port`<sup>Optional</sup> <a name="dest_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.destPort"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

###### `predefined_group`<sup>Optional</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.predefinedGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.protocol"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

###### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.protocols"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

###### `service_group`<sup>Optional</sup> <a name="service_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.serviceGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}.

---

###### `service_group_names`<sup>Optional</sup> <a name="service_group_names" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.serviceGroupNames"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]

service_group_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_group_names CfwAclRuleV1#service_group_names}

---

###### `service_set_id`<sup>Optional</sup> <a name="service_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.serviceSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}.

---

###### `service_set_name`<sup>Optional</sup> <a name="service_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.serviceSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}.

---

###### `service_set_type`<sup>Optional</sup> <a name="service_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.serviceSetType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

###### `source_port`<sup>Optional</sup> <a name="source_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.sourcePort"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource"></a>

```python
def put_source(
  type: typing.Union[int, float],
  address: str = None,
  address_group: typing.List[str] = None,
  address_set_id: str = None,
  address_set_name: str = None,
  address_set_type: typing.Union[int, float] = None,
  address_type: typing.Union[int, float] = None,
  domain_address_name: str = None,
  domain_set_id: str = None,
  domain_set_name: str = None,
  ip_address: typing.List[str] = None,
  predefined_group: typing.List[str] = None,
  region_list: IResolvable | typing.List[CfwAclRuleV1SourceRegionListStruct] = None,
  region_list_json: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

###### `address_group`<sup>Optional</sup> <a name="address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.addressGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

###### `address_set_id`<sup>Optional</sup> <a name="address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.addressSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

###### `address_set_name`<sup>Optional</sup> <a name="address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.addressSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

###### `address_set_type`<sup>Optional</sup> <a name="address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.addressSetType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

###### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.addressType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

###### `domain_address_name`<sup>Optional</sup> <a name="domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.domainAddressName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

###### `domain_set_id`<sup>Optional</sup> <a name="domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.domainSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

###### `domain_set_name`<sup>Optional</sup> <a name="domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.domainSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.ipAddress"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

###### `predefined_group`<sup>Optional</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.predefinedGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

###### `region_list`<sup>Optional</sup> <a name="region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.regionList"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

###### `region_list_json`<sup>Optional</sup> <a name="region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.regionListJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}.

---

##### `reset_applications` <a name="reset_applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications"></a>

```python
def reset_applications() -> None
```

##### `reset_applications_json_string` <a name="reset_applications_json_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString"></a>

```python
def reset_applications_json_string() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_long_connect_time` <a name="reset_long_connect_time" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime"></a>

```python
def reset_long_connect_time() -> None
```

##### `reset_long_connect_time_hour` <a name="reset_long_connect_time_hour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour"></a>

```python
def reset_long_connect_time_hour() -> None
```

##### `reset_long_connect_time_minute` <a name="reset_long_connect_time_minute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute"></a>

```python
def reset_long_connect_time_minute() -> None
```

##### `reset_long_connect_time_second` <a name="reset_long_connect_time_second" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond"></a>

```python
def reset_long_connect_time_second() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CfwAclRuleV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CfwAclRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwAclRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime">last_open_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput">action_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput">address_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput">applications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput">applications_json_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput">direction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput">long_connect_enable_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput">long_connect_time_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput">long_connect_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput">long_connect_time_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput">long_connect_time_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput">sequence_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput">service_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput">status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType">action_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications">applications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString">applications_json_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction">direction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable">long_connect_enable</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime">long_connect_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour">long_connect_time_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute">long_connect_time_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond">long_connect_time_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status">status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination"></a>

```python
destination: CfwAclRuleV1DestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_open_time`<sup>Required</sup> <a name="last_open_time" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime"></a>

```python
last_open_time: str
```

- *Type:* str

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence"></a>

```python
sequence: CfwAclRuleV1SequenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service"></a>

```python
service: CfwAclRuleV1ServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source"></a>

```python
source: CfwAclRuleV1SourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts"></a>

```python
timeouts: CfwAclRuleV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput"></a>

```python
action_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_type_input`<sup>Optional</sup> <a name="address_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput"></a>

```python
address_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `applications_input`<sup>Optional</sup> <a name="applications_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput"></a>

```python
applications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `applications_json_string_input`<sup>Optional</sup> <a name="applications_json_string_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput"></a>

```python
applications_json_string_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput"></a>

```python
destination_input: CfwAclRuleV1Destination
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput"></a>

```python
direction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_enable_input`<sup>Optional</sup> <a name="long_connect_enable_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput"></a>

```python
long_connect_enable_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time_hour_input`<sup>Optional</sup> <a name="long_connect_time_hour_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput"></a>

```python
long_connect_time_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time_input`<sup>Optional</sup> <a name="long_connect_time_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput"></a>

```python
long_connect_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time_minute_input`<sup>Optional</sup> <a name="long_connect_time_minute_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput"></a>

```python
long_connect_time_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time_second_input`<sup>Optional</sup> <a name="long_connect_time_second_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput"></a>

```python
long_connect_time_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `sequence_input`<sup>Optional</sup> <a name="sequence_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput"></a>

```python
sequence_input: CfwAclRuleV1Sequence
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput"></a>

```python
service_input: CfwAclRuleV1Service
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput"></a>

```python
source_input: CfwAclRuleV1Source
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput"></a>

```python
status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CfwAclRuleV1Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType"></a>

```python
action_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications"></a>

```python
applications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `applications_json_string`<sup>Required</sup> <a name="applications_json_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString"></a>

```python
applications_json_string: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction"></a>

```python
direction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_enable`<sup>Required</sup> <a name="long_connect_enable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable"></a>

```python
long_connect_enable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time`<sup>Required</sup> <a name="long_connect_time" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime"></a>

```python
long_connect_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time_hour`<sup>Required</sup> <a name="long_connect_time_hour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour"></a>

```python
long_connect_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time_minute`<sup>Required</sup> <a name="long_connect_time_minute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute"></a>

```python
long_connect_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_connect_time_second`<sup>Required</sup> <a name="long_connect_time_second" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond"></a>

```python
long_connect_time_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status"></a>

```python
status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CfwAclRuleV1Config <a name="CfwAclRuleV1Config" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_type: typing.Union[int, float],
  address_type: typing.Union[int, float],
  destination: CfwAclRuleV1Destination,
  long_connect_enable: typing.Union[int, float],
  name: str,
  object_id: str,
  sequence: CfwAclRuleV1Sequence,
  service: CfwAclRuleV1Service,
  source: CfwAclRuleV1Source,
  status: typing.Union[int, float],
  type: typing.Union[int, float],
  applications: typing.List[str] = None,
  applications_json_string: str = None,
  description: str = None,
  direction: typing.Union[int, float] = None,
  long_connect_time: typing.Union[int, float] = None,
  long_connect_time_hour: typing.Union[int, float] = None,
  long_connect_time_minute: typing.Union[int, float] = None,
  long_connect_time_second: typing.Union[int, float] = None,
  timeouts: CfwAclRuleV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType">action_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable">long_connect_enable</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | sequence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | source block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status">status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications">applications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString">applications_json_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction">direction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime">long_connect_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour">long_connect_time_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute">long_connect_time_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond">long_connect_time_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType"></a>

```python
action_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}.

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination"></a>

```python
destination: CfwAclRuleV1Destination
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#destination CfwAclRuleV1#destination}

---

##### `long_connect_enable`<sup>Required</sup> <a name="long_connect_enable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable"></a>

```python
long_connect_enable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}.

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence"></a>

```python
sequence: CfwAclRuleV1Sequence
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#sequence CfwAclRuleV1#sequence}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service"></a>

```python
service: CfwAclRuleV1Service
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service CfwAclRuleV1#service}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source"></a>

```python
source: CfwAclRuleV1Source
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source CfwAclRuleV1#source}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status"></a>

```python
status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications"></a>

```python
applications: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}.

---

##### `applications_json_string`<sup>Optional</sup> <a name="applications_json_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString"></a>

```python
applications_json_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction"></a>

```python
direction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}.

---

##### `long_connect_time`<sup>Optional</sup> <a name="long_connect_time" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime"></a>

```python
long_connect_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}.

---

##### `long_connect_time_hour`<sup>Optional</sup> <a name="long_connect_time_hour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour"></a>

```python
long_connect_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}.

---

##### `long_connect_time_minute`<sup>Optional</sup> <a name="long_connect_time_minute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute"></a>

```python
long_connect_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}.

---

##### `long_connect_time_second`<sup>Optional</sup> <a name="long_connect_time_second" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond"></a>

```python
long_connect_time_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts"></a>

```python
timeouts: CfwAclRuleV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#timeouts CfwAclRuleV1#timeouts}

---

### CfwAclRuleV1Destination <a name="CfwAclRuleV1Destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1Destination(
  type: typing.Union[int, float],
  address: str = None,
  address_group: typing.List[str] = None,
  address_set_id: str = None,
  address_set_name: str = None,
  address_set_type: typing.Union[int, float] = None,
  address_type: typing.Union[int, float] = None,
  domain_address_name: str = None,
  domain_set_id: str = None,
  domain_set_name: str = None,
  ip_address: typing.List[str] = None,
  predefined_group: typing.List[str] = None,
  region_list: IResolvable | typing.List[CfwAclRuleV1DestinationRegionListStruct] = None,
  region_list_json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup">address_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId">address_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName">address_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType">address_set_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName">domain_address_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId">domain_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName">domain_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress">ip_address</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup">predefined_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList">region_list</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]</code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson">region_list_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `address_group`<sup>Optional</sup> <a name="address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup"></a>

```python
address_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `address_set_id`<sup>Optional</sup> <a name="address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId"></a>

```python
address_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `address_set_name`<sup>Optional</sup> <a name="address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName"></a>

```python
address_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `address_set_type`<sup>Optional</sup> <a name="address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType"></a>

```python
address_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `domain_address_name`<sup>Optional</sup> <a name="domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName"></a>

```python
domain_address_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `domain_set_id`<sup>Optional</sup> <a name="domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId"></a>

```python
domain_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `domain_set_name`<sup>Optional</sup> <a name="domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName"></a>

```python
domain_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress"></a>

```python
ip_address: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `predefined_group`<sup>Optional</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup"></a>

```python
predefined_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `region_list`<sup>Optional</sup> <a name="region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList"></a>

```python
region_list: IResolvable | typing.List[CfwAclRuleV1DestinationRegionListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `region_list_json`<sup>Optional</sup> <a name="region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson"></a>

```python
region_list_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1DestinationRegionListStruct <a name="CfwAclRuleV1DestinationRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct(
  region_id: str = None,
  region_type: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId">region_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType">region_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `region_id`<sup>Optional</sup> <a name="region_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `region_type`<sup>Optional</sup> <a name="region_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType"></a>

```python
region_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Sequence <a name="CfwAclRuleV1Sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1Sequence(
  bottom: typing.Union[int, float] = None,
  dest_rule_id: str = None,
  top: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom">bottom</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId">dest_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top">top</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}. |

---

##### `bottom`<sup>Optional</sup> <a name="bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom"></a>

```python
bottom: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}.

---

##### `dest_rule_id`<sup>Optional</sup> <a name="dest_rule_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId"></a>

```python
dest_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}.

---

##### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top"></a>

```python
top: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}.

---

### CfwAclRuleV1Service <a name="CfwAclRuleV1Service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1Service(
  type: typing.Union[int, float],
  custom_service: IResolvable | typing.List[CfwAclRuleV1ServiceCustomService] = None,
  dest_port: str = None,
  predefined_group: typing.List[str] = None,
  protocol: typing.Union[int, float] = None,
  protocols: typing.List[typing.Union[int, float]] = None,
  service_group: typing.List[str] = None,
  service_group_names: IResolvable | typing.List[CfwAclRuleV1ServiceServiceGroupNames] = None,
  service_set_id: str = None,
  service_set_name: str = None,
  service_set_type: typing.Union[int, float] = None,
  source_port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService">custom_service</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]</code> | custom_service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort">dest_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup">predefined_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols">protocols</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup">service_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames">service_group_names</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]</code> | service_group_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId">service_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName">service_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType">service_set_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort">source_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `custom_service`<sup>Optional</sup> <a name="custom_service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService"></a>

```python
custom_service: IResolvable | typing.List[CfwAclRuleV1ServiceCustomService]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]

custom_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#custom_service CfwAclRuleV1#custom_service}

---

##### `dest_port`<sup>Optional</sup> <a name="dest_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort"></a>

```python
dest_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `predefined_group`<sup>Optional</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup"></a>

```python
predefined_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols"></a>

```python
protocols: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `service_group`<sup>Optional</sup> <a name="service_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup"></a>

```python
service_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}.

---

##### `service_group_names`<sup>Optional</sup> <a name="service_group_names" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames"></a>

```python
service_group_names: IResolvable | typing.List[CfwAclRuleV1ServiceServiceGroupNames]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]

service_group_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_group_names CfwAclRuleV1#service_group_names}

---

##### `service_set_id`<sup>Optional</sup> <a name="service_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId"></a>

```python
service_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}.

---

##### `service_set_name`<sup>Optional</sup> <a name="service_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName"></a>

```python
service_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}.

---

##### `service_set_type`<sup>Optional</sup> <a name="service_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType"></a>

```python
service_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `source_port`<sup>Optional</sup> <a name="source_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort"></a>

```python
source_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceCustomService <a name="CfwAclRuleV1ServiceCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1ServiceCustomService(
  description: str = None,
  dest_port: str = None,
  name: str = None,
  protocol: typing.Union[int, float] = None,
  source_port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort">dest_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort">source_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `dest_port`<sup>Optional</sup> <a name="dest_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort"></a>

```python
dest_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `source_port`<sup>Optional</sup> <a name="source_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort"></a>

```python
source_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceServiceGroupNames <a name="CfwAclRuleV1ServiceServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames(
  name: str = None,
  protocols: typing.List[typing.Union[int, float]] = None,
  service_set_type: typing.Union[int, float] = None,
  set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols">protocols</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType">service_set_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId">set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols"></a>

```python
protocols: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `service_set_type`<sup>Optional</sup> <a name="service_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType"></a>

```python
service_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `set_id`<sup>Optional</sup> <a name="set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId"></a>

```python
set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}.

---

### CfwAclRuleV1Source <a name="CfwAclRuleV1Source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1Source(
  type: typing.Union[int, float],
  address: str = None,
  address_group: typing.List[str] = None,
  address_set_id: str = None,
  address_set_name: str = None,
  address_set_type: typing.Union[int, float] = None,
  address_type: typing.Union[int, float] = None,
  domain_address_name: str = None,
  domain_set_id: str = None,
  domain_set_name: str = None,
  ip_address: typing.List[str] = None,
  predefined_group: typing.List[str] = None,
  region_list: IResolvable | typing.List[CfwAclRuleV1SourceRegionListStruct] = None,
  region_list_json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup">address_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId">address_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName">address_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType">address_set_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName">domain_address_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId">domain_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName">domain_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress">ip_address</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup">predefined_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList">region_list</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]</code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson">region_list_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `address_group`<sup>Optional</sup> <a name="address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup"></a>

```python
address_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `address_set_id`<sup>Optional</sup> <a name="address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId"></a>

```python
address_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `address_set_name`<sup>Optional</sup> <a name="address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName"></a>

```python
address_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `address_set_type`<sup>Optional</sup> <a name="address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType"></a>

```python
address_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `domain_address_name`<sup>Optional</sup> <a name="domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName"></a>

```python
domain_address_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `domain_set_id`<sup>Optional</sup> <a name="domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId"></a>

```python
domain_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `domain_set_name`<sup>Optional</sup> <a name="domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName"></a>

```python
domain_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress"></a>

```python
ip_address: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `predefined_group`<sup>Optional</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup"></a>

```python
predefined_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `region_list`<sup>Optional</sup> <a name="region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList"></a>

```python
region_list: IResolvable | typing.List[CfwAclRuleV1SourceRegionListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `region_list_json`<sup>Optional</sup> <a name="region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson"></a>

```python
region_list_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1SourceRegionListStruct <a name="CfwAclRuleV1SourceRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct(
  region_id: str = None,
  region_type: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId">region_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType">region_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `region_id`<sup>Optional</sup> <a name="region_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `region_type`<sup>Optional</sup> <a name="region_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType"></a>

```python
region_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Timeouts <a name="CfwAclRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwAclRuleV1DestinationOutputReference <a name="CfwAclRuleV1DestinationOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList">put_region_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup">reset_address_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId">reset_address_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName">reset_address_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType">reset_address_set_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType">reset_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName">reset_domain_address_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId">reset_domain_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName">reset_domain_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup">reset_predefined_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList">reset_region_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson">reset_region_list_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_region_list` <a name="put_region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList"></a>

```python
def put_region_list(
  value: IResolvable | typing.List[CfwAclRuleV1DestinationRegionListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_address_group` <a name="reset_address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup"></a>

```python
def reset_address_group() -> None
```

##### `reset_address_set_id` <a name="reset_address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId"></a>

```python
def reset_address_set_id() -> None
```

##### `reset_address_set_name` <a name="reset_address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName"></a>

```python
def reset_address_set_name() -> None
```

##### `reset_address_set_type` <a name="reset_address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType"></a>

```python
def reset_address_set_type() -> None
```

##### `reset_address_type` <a name="reset_address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType"></a>

```python
def reset_address_type() -> None
```

##### `reset_domain_address_name` <a name="reset_domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName"></a>

```python
def reset_domain_address_name() -> None
```

##### `reset_domain_set_id` <a name="reset_domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId"></a>

```python
def reset_domain_set_id() -> None
```

##### `reset_domain_set_name` <a name="reset_domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName"></a>

```python
def reset_domain_set_name() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_predefined_group` <a name="reset_predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup"></a>

```python
def reset_predefined_group() -> None
```

##### `reset_region_list` <a name="reset_region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList"></a>

```python
def reset_region_list() -> None
```

##### `reset_region_list_json` <a name="reset_region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson"></a>

```python
def reset_region_list_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList">region_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput">address_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput">address_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput">address_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput">address_set_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput">address_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput">domain_address_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput">domain_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput">domain_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput">predefined_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput">region_list_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput">region_list_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup">address_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId">address_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName">address_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType">address_set_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName">domain_address_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId">domain_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName">domain_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress">ip_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup">predefined_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson">region_list_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_list`<sup>Required</sup> <a name="region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList"></a>

```python
region_list: CfwAclRuleV1DestinationRegionListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a>

---

##### `address_group_input`<sup>Optional</sup> <a name="address_group_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput"></a>

```python
address_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address_set_id_input`<sup>Optional</sup> <a name="address_set_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput"></a>

```python
address_set_id_input: str
```

- *Type:* str

---

##### `address_set_name_input`<sup>Optional</sup> <a name="address_set_name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput"></a>

```python
address_set_name_input: str
```

- *Type:* str

---

##### `address_set_type_input`<sup>Optional</sup> <a name="address_set_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput"></a>

```python
address_set_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_type_input`<sup>Optional</sup> <a name="address_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput"></a>

```python
address_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_address_name_input`<sup>Optional</sup> <a name="domain_address_name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput"></a>

```python
domain_address_name_input: str
```

- *Type:* str

---

##### `domain_set_id_input`<sup>Optional</sup> <a name="domain_set_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput"></a>

```python
domain_set_id_input: str
```

- *Type:* str

---

##### `domain_set_name_input`<sup>Optional</sup> <a name="domain_set_name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput"></a>

```python
domain_set_name_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `predefined_group_input`<sup>Optional</sup> <a name="predefined_group_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput"></a>

```python
predefined_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_list_input`<sup>Optional</sup> <a name="region_list_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput"></a>

```python
region_list_input: IResolvable | typing.List[CfwAclRuleV1DestinationRegionListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]

---

##### `region_list_json_input`<sup>Optional</sup> <a name="region_list_json_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput"></a>

```python
region_list_json_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address_group`<sup>Required</sup> <a name="address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup"></a>

```python
address_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_set_id`<sup>Required</sup> <a name="address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId"></a>

```python
address_set_id: str
```

- *Type:* str

---

##### `address_set_name`<sup>Required</sup> <a name="address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName"></a>

```python
address_set_name: str
```

- *Type:* str

---

##### `address_set_type`<sup>Required</sup> <a name="address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType"></a>

```python
address_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_address_name`<sup>Required</sup> <a name="domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName"></a>

```python
domain_address_name: str
```

- *Type:* str

---

##### `domain_set_id`<sup>Required</sup> <a name="domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId"></a>

```python
domain_set_id: str
```

- *Type:* str

---

##### `domain_set_name`<sup>Required</sup> <a name="domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName"></a>

```python
domain_set_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress"></a>

```python
ip_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `predefined_group`<sup>Required</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup"></a>

```python
predefined_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_list_json`<sup>Required</sup> <a name="region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson"></a>

```python
region_list_json: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue"></a>

```python
internal_value: CfwAclRuleV1Destination
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---


### CfwAclRuleV1DestinationRegionListStructList <a name="CfwAclRuleV1DestinationRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CfwAclRuleV1DestinationRegionListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CfwAclRuleV1DestinationRegionListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>]

---


### CfwAclRuleV1DestinationRegionListStructOutputReference <a name="CfwAclRuleV1DestinationRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId">reset_region_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType">reset_region_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region_id` <a name="reset_region_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId"></a>

```python
def reset_region_id() -> None
```

##### `reset_region_type` <a name="reset_region_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType"></a>

```python
def reset_region_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput">region_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput">region_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId">region_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType">region_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_id_input`<sup>Optional</sup> <a name="region_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput"></a>

```python
region_id_input: str
```

- *Type:* str

---

##### `region_type_input`<sup>Optional</sup> <a name="region_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput"></a>

```python
region_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_id`<sup>Required</sup> <a name="region_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

---

##### `region_type`<sup>Required</sup> <a name="region_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType"></a>

```python
region_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CfwAclRuleV1DestinationRegionListStruct
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>

---


### CfwAclRuleV1SequenceOutputReference <a name="CfwAclRuleV1SequenceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom">reset_bottom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId">reset_dest_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop">reset_top</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bottom` <a name="reset_bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom"></a>

```python
def reset_bottom() -> None
```

##### `reset_dest_rule_id` <a name="reset_dest_rule_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId"></a>

```python
def reset_dest_rule_id() -> None
```

##### `reset_top` <a name="reset_top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop"></a>

```python
def reset_top() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput">bottom_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput">dest_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput">top_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom">bottom</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId">dest_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top">top</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bottom_input`<sup>Optional</sup> <a name="bottom_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput"></a>

```python
bottom_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dest_rule_id_input`<sup>Optional</sup> <a name="dest_rule_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput"></a>

```python
dest_rule_id_input: str
```

- *Type:* str

---

##### `top_input`<sup>Optional</sup> <a name="top_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput"></a>

```python
top_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bottom`<sup>Required</sup> <a name="bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom"></a>

```python
bottom: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dest_rule_id`<sup>Required</sup> <a name="dest_rule_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId"></a>

```python
dest_rule_id: str
```

- *Type:* str

---

##### `top`<sup>Required</sup> <a name="top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top"></a>

```python
top: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue"></a>

```python
internal_value: CfwAclRuleV1Sequence
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---


### CfwAclRuleV1ServiceCustomServiceList <a name="CfwAclRuleV1ServiceCustomServiceList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CfwAclRuleV1ServiceCustomServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CfwAclRuleV1ServiceCustomService]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]

---


### CfwAclRuleV1ServiceCustomServiceOutputReference <a name="CfwAclRuleV1ServiceCustomServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort">reset_dest_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort">reset_source_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dest_port` <a name="reset_dest_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort"></a>

```python
def reset_dest_port() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_source_port` <a name="reset_source_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort"></a>

```python
def reset_source_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput">dest_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput">protocol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput">source_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort">dest_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort">source_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dest_port_input`<sup>Optional</sup> <a name="dest_port_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput"></a>

```python
dest_port_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput"></a>

```python
protocol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_input`<sup>Optional</sup> <a name="source_port_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput"></a>

```python
source_port_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dest_port`<sup>Required</sup> <a name="dest_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort"></a>

```python
dest_port: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort"></a>

```python
source_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CfwAclRuleV1ServiceCustomService
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>

---


### CfwAclRuleV1ServiceOutputReference <a name="CfwAclRuleV1ServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService">put_custom_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames">put_service_group_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService">reset_custom_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort">reset_dest_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup">reset_predefined_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup">reset_service_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames">reset_service_group_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId">reset_service_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName">reset_service_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType">reset_service_set_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort">reset_source_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_service` <a name="put_custom_service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService"></a>

```python
def put_custom_service(
  value: IResolvable | typing.List[CfwAclRuleV1ServiceCustomService]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]

---

##### `put_service_group_names` <a name="put_service_group_names" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames"></a>

```python
def put_service_group_names(
  value: IResolvable | typing.List[CfwAclRuleV1ServiceServiceGroupNames]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]

---

##### `reset_custom_service` <a name="reset_custom_service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService"></a>

```python
def reset_custom_service() -> None
```

##### `reset_dest_port` <a name="reset_dest_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort"></a>

```python
def reset_dest_port() -> None
```

##### `reset_predefined_group` <a name="reset_predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup"></a>

```python
def reset_predefined_group() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_service_group` <a name="reset_service_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup"></a>

```python
def reset_service_group() -> None
```

##### `reset_service_group_names` <a name="reset_service_group_names" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames"></a>

```python
def reset_service_group_names() -> None
```

##### `reset_service_set_id` <a name="reset_service_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId"></a>

```python
def reset_service_set_id() -> None
```

##### `reset_service_set_name` <a name="reset_service_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName"></a>

```python
def reset_service_set_name() -> None
```

##### `reset_service_set_type` <a name="reset_service_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType"></a>

```python
def reset_service_set_type() -> None
```

##### `reset_source_port` <a name="reset_source_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort"></a>

```python
def reset_source_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService">custom_service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames">service_group_names</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput">custom_service_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput">dest_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput">predefined_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput">protocol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput">service_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput">service_group_names_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput">service_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput">service_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput">service_set_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput">source_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort">dest_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup">predefined_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols">protocols</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup">service_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId">service_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName">service_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType">service_set_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort">source_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_service`<sup>Required</sup> <a name="custom_service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService"></a>

```python
custom_service: CfwAclRuleV1ServiceCustomServiceList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a>

---

##### `service_group_names`<sup>Required</sup> <a name="service_group_names" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames"></a>

```python
service_group_names: CfwAclRuleV1ServiceServiceGroupNamesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a>

---

##### `custom_service_input`<sup>Optional</sup> <a name="custom_service_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput"></a>

```python
custom_service_input: IResolvable | typing.List[CfwAclRuleV1ServiceCustomService]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>]

---

##### `dest_port_input`<sup>Optional</sup> <a name="dest_port_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput"></a>

```python
dest_port_input: str
```

- *Type:* str

---

##### `predefined_group_input`<sup>Optional</sup> <a name="predefined_group_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput"></a>

```python
predefined_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput"></a>

```python
protocol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `service_group_input`<sup>Optional</sup> <a name="service_group_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput"></a>

```python
service_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_group_names_input`<sup>Optional</sup> <a name="service_group_names_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput"></a>

```python
service_group_names_input: IResolvable | typing.List[CfwAclRuleV1ServiceServiceGroupNames]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]

---

##### `service_set_id_input`<sup>Optional</sup> <a name="service_set_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput"></a>

```python
service_set_id_input: str
```

- *Type:* str

---

##### `service_set_name_input`<sup>Optional</sup> <a name="service_set_name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput"></a>

```python
service_set_name_input: str
```

- *Type:* str

---

##### `service_set_type_input`<sup>Optional</sup> <a name="service_set_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput"></a>

```python
service_set_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port_input`<sup>Optional</sup> <a name="source_port_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput"></a>

```python
source_port_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dest_port`<sup>Required</sup> <a name="dest_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort"></a>

```python
dest_port: str
```

- *Type:* str

---

##### `predefined_group`<sup>Required</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup"></a>

```python
predefined_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols"></a>

```python
protocols: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `service_group`<sup>Required</sup> <a name="service_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup"></a>

```python
service_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_set_id`<sup>Required</sup> <a name="service_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId"></a>

```python
service_set_id: str
```

- *Type:* str

---

##### `service_set_name`<sup>Required</sup> <a name="service_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName"></a>

```python
service_set_name: str
```

- *Type:* str

---

##### `service_set_type`<sup>Required</sup> <a name="service_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType"></a>

```python
service_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort"></a>

```python
source_port: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue"></a>

```python
internal_value: CfwAclRuleV1Service
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---


### CfwAclRuleV1ServiceServiceGroupNamesList <a name="CfwAclRuleV1ServiceServiceGroupNamesList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CfwAclRuleV1ServiceServiceGroupNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CfwAclRuleV1ServiceServiceGroupNames]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>]

---


### CfwAclRuleV1ServiceServiceGroupNamesOutputReference <a name="CfwAclRuleV1ServiceServiceGroupNamesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType">reset_service_set_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId">reset_set_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_service_set_type` <a name="reset_service_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType"></a>

```python
def reset_service_set_type() -> None
```

##### `reset_set_id` <a name="reset_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId"></a>

```python
def reset_set_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput">service_set_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput">set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols">protocols</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType">service_set_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId">set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `service_set_type_input`<sup>Optional</sup> <a name="service_set_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput"></a>

```python
service_set_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `set_id_input`<sup>Optional</sup> <a name="set_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput"></a>

```python
set_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols"></a>

```python
protocols: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `service_set_type`<sup>Required</sup> <a name="service_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType"></a>

```python
service_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `set_id`<sup>Required</sup> <a name="set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId"></a>

```python
set_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CfwAclRuleV1ServiceServiceGroupNames
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>

---


### CfwAclRuleV1SourceOutputReference <a name="CfwAclRuleV1SourceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1SourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList">put_region_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup">reset_address_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId">reset_address_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName">reset_address_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType">reset_address_set_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType">reset_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName">reset_domain_address_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId">reset_domain_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName">reset_domain_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup">reset_predefined_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList">reset_region_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson">reset_region_list_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_region_list` <a name="put_region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList"></a>

```python
def put_region_list(
  value: IResolvable | typing.List[CfwAclRuleV1SourceRegionListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_address_group` <a name="reset_address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup"></a>

```python
def reset_address_group() -> None
```

##### `reset_address_set_id` <a name="reset_address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId"></a>

```python
def reset_address_set_id() -> None
```

##### `reset_address_set_name` <a name="reset_address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName"></a>

```python
def reset_address_set_name() -> None
```

##### `reset_address_set_type` <a name="reset_address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType"></a>

```python
def reset_address_set_type() -> None
```

##### `reset_address_type` <a name="reset_address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType"></a>

```python
def reset_address_type() -> None
```

##### `reset_domain_address_name` <a name="reset_domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName"></a>

```python
def reset_domain_address_name() -> None
```

##### `reset_domain_set_id` <a name="reset_domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId"></a>

```python
def reset_domain_set_id() -> None
```

##### `reset_domain_set_name` <a name="reset_domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName"></a>

```python
def reset_domain_set_name() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_predefined_group` <a name="reset_predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup"></a>

```python
def reset_predefined_group() -> None
```

##### `reset_region_list` <a name="reset_region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList"></a>

```python
def reset_region_list() -> None
```

##### `reset_region_list_json` <a name="reset_region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson"></a>

```python
def reset_region_list_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList">region_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput">address_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput">address_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput">address_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput">address_set_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput">address_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput">domain_address_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput">domain_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput">domain_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput">predefined_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput">region_list_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput">region_list_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup">address_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId">address_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName">address_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType">address_set_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType">address_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName">domain_address_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId">domain_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName">domain_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress">ip_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup">predefined_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson">region_list_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_list`<sup>Required</sup> <a name="region_list" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList"></a>

```python
region_list: CfwAclRuleV1SourceRegionListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a>

---

##### `address_group_input`<sup>Optional</sup> <a name="address_group_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput"></a>

```python
address_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address_set_id_input`<sup>Optional</sup> <a name="address_set_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput"></a>

```python
address_set_id_input: str
```

- *Type:* str

---

##### `address_set_name_input`<sup>Optional</sup> <a name="address_set_name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput"></a>

```python
address_set_name_input: str
```

- *Type:* str

---

##### `address_set_type_input`<sup>Optional</sup> <a name="address_set_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput"></a>

```python
address_set_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_type_input`<sup>Optional</sup> <a name="address_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput"></a>

```python
address_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_address_name_input`<sup>Optional</sup> <a name="domain_address_name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput"></a>

```python
domain_address_name_input: str
```

- *Type:* str

---

##### `domain_set_id_input`<sup>Optional</sup> <a name="domain_set_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput"></a>

```python
domain_set_id_input: str
```

- *Type:* str

---

##### `domain_set_name_input`<sup>Optional</sup> <a name="domain_set_name_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput"></a>

```python
domain_set_name_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `predefined_group_input`<sup>Optional</sup> <a name="predefined_group_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput"></a>

```python
predefined_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_list_input`<sup>Optional</sup> <a name="region_list_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput"></a>

```python
region_list_input: IResolvable | typing.List[CfwAclRuleV1SourceRegionListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]

---

##### `region_list_json_input`<sup>Optional</sup> <a name="region_list_json_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput"></a>

```python
region_list_json_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address_group`<sup>Required</sup> <a name="address_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup"></a>

```python
address_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_set_id`<sup>Required</sup> <a name="address_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId"></a>

```python
address_set_id: str
```

- *Type:* str

---

##### `address_set_name`<sup>Required</sup> <a name="address_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName"></a>

```python
address_set_name: str
```

- *Type:* str

---

##### `address_set_type`<sup>Required</sup> <a name="address_set_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType"></a>

```python
address_set_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType"></a>

```python
address_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_address_name`<sup>Required</sup> <a name="domain_address_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName"></a>

```python
domain_address_name: str
```

- *Type:* str

---

##### `domain_set_id`<sup>Required</sup> <a name="domain_set_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId"></a>

```python
domain_set_id: str
```

- *Type:* str

---

##### `domain_set_name`<sup>Required</sup> <a name="domain_set_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName"></a>

```python
domain_set_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress"></a>

```python
ip_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `predefined_group`<sup>Required</sup> <a name="predefined_group" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup"></a>

```python
predefined_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_list_json`<sup>Required</sup> <a name="region_list_json" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson"></a>

```python
region_list_json: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue"></a>

```python
internal_value: CfwAclRuleV1Source
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---


### CfwAclRuleV1SourceRegionListStructList <a name="CfwAclRuleV1SourceRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CfwAclRuleV1SourceRegionListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CfwAclRuleV1SourceRegionListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>]

---


### CfwAclRuleV1SourceRegionListStructOutputReference <a name="CfwAclRuleV1SourceRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId">reset_region_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType">reset_region_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region_id` <a name="reset_region_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId"></a>

```python
def reset_region_id() -> None
```

##### `reset_region_type` <a name="reset_region_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType"></a>

```python
def reset_region_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput">region_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput">region_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId">region_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType">region_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_id_input`<sup>Optional</sup> <a name="region_id_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput"></a>

```python
region_id_input: str
```

- *Type:* str

---

##### `region_type_input`<sup>Optional</sup> <a name="region_type_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput"></a>

```python
region_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_id`<sup>Required</sup> <a name="region_id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

---

##### `region_type`<sup>Required</sup> <a name="region_type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType"></a>

```python
region_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CfwAclRuleV1SourceRegionListStruct
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>

---


### CfwAclRuleV1TimeoutsOutputReference <a name="CfwAclRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cfw_acl_rule_v1

cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CfwAclRuleV1Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---



