# `cfwAclRuleV1` Submodule <a name="`cfwAclRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwAclRuleV1 <a name="CfwAclRuleV1" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1 opentelekomcloud_cfw_acl_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1;

CfwAclRuleV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .actionType(java.lang.Number)
    .addressType(java.lang.Number)
    .destination(CfwAclRuleV1Destination)
    .longConnectEnable(java.lang.Number)
    .name(java.lang.String)
    .objectId(java.lang.String)
    .sequence(CfwAclRuleV1Sequence)
    .service(CfwAclRuleV1Service)
    .source(CfwAclRuleV1Source)
    .status(java.lang.Number)
    .type(java.lang.Number)
//  .applications(java.util.List<java.lang.String>)
//  .applicationsJsonString(java.lang.String)
//  .description(java.lang.String)
//  .direction(java.lang.Number)
//  .longConnectTime(java.lang.Number)
//  .longConnectTimeHour(java.lang.Number)
//  .longConnectTimeMinute(java.lang.Number)
//  .longConnectTimeSecond(java.lang.Number)
//  .timeouts(CfwAclRuleV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.actionType">actionType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.addressType">addressType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectEnable">longConnectEnable</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | sequence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | source block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.status">status</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applications">applications</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applicationsJsonString">applicationsJsonString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.direction">direction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTime">longConnectTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeHour">longConnectTimeHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeMinute">longConnectTimeMinute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeSecond">longConnectTimeSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.actionType"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}.

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.addressType"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#destination CfwAclRuleV1#destination}

---

##### `longConnectEnable`<sup>Required</sup> <a name="longConnectEnable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectEnable"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}.

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.sequence"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#sequence CfwAclRuleV1#sequence}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.service"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service CfwAclRuleV1#service}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source CfwAclRuleV1#source}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.status"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.type"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applications"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}.

---

##### `applicationsJsonString`<sup>Optional</sup> <a name="applicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.applicationsJsonString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.direction"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}.

---

##### `longConnectTime`<sup>Optional</sup> <a name="longConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}.

---

##### `longConnectTimeHour`<sup>Optional</sup> <a name="longConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeHour"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}.

---

##### `longConnectTimeMinute`<sup>Optional</sup> <a name="longConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeMinute"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}.

---

##### `longConnectTimeSecond`<sup>Optional</sup> <a name="longConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.longConnectTimeSecond"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#timeouts CfwAclRuleV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence">putSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications">resetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString">resetApplicationsJsonString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime">resetLongConnectTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour">resetLongConnectTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute">resetLongConnectTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond">resetLongConnectTimeSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination"></a>

```java
public void putDestination(CfwAclRuleV1Destination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---

##### `putSequence` <a name="putSequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence"></a>

```java
public void putSequence(CfwAclRuleV1Sequence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---

##### `putService` <a name="putService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService"></a>

```java
public void putService(CfwAclRuleV1Service value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource"></a>

```java
public void putSource(CfwAclRuleV1Source value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts"></a>

```java
public void putTimeouts(CfwAclRuleV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---

##### `resetApplications` <a name="resetApplications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications"></a>

```java
public void resetApplications()
```

##### `resetApplicationsJsonString` <a name="resetApplicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString"></a>

```java
public void resetApplicationsJsonString()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetLongConnectTime` <a name="resetLongConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime"></a>

```java
public void resetLongConnectTime()
```

##### `resetLongConnectTimeHour` <a name="resetLongConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour"></a>

```java
public void resetLongConnectTimeHour()
```

##### `resetLongConnectTimeMinute` <a name="resetLongConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute"></a>

```java
public void resetLongConnectTimeMinute()
```

##### `resetLongConnectTimeSecond` <a name="resetLongConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond"></a>

```java
public void resetLongConnectTimeSecond()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1;

CfwAclRuleV1.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1;

CfwAclRuleV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1;

CfwAclRuleV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1;

CfwAclRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CfwAclRuleV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CfwAclRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CfwAclRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CfwAclRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime">lastOpenTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput">addressTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput">applicationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput">applicationsJsonStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput">directionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput">longConnectEnableInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput">longConnectTimeHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput">longConnectTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput">longConnectTimeMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput">longConnectTimeSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput">sequenceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput">serviceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput">statusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType">actionType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType">addressType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications">applications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString">applicationsJsonString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction">direction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable">longConnectEnable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime">longConnectTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour">longConnectTimeHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute">longConnectTimeMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond">longConnectTimeSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status">status</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination"></a>

```java
public CfwAclRuleV1DestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastOpenTime`<sup>Required</sup> <a name="lastOpenTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime"></a>

```java
public java.lang.String getLastOpenTime();
```

- *Type:* java.lang.String

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence"></a>

```java
public CfwAclRuleV1SequenceOutputReference getSequence();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service"></a>

```java
public CfwAclRuleV1ServiceOutputReference getService();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source"></a>

```java
public CfwAclRuleV1SourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts"></a>

```java
public CfwAclRuleV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput"></a>

```java
public java.lang.Number getActionTypeInput();
```

- *Type:* java.lang.Number

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput"></a>

```java
public java.lang.Number getAddressTypeInput();
```

- *Type:* java.lang.Number

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput"></a>

```java
public java.util.List<java.lang.String> getApplicationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationsJsonStringInput`<sup>Optional</sup> <a name="applicationsJsonStringInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput"></a>

```java
public java.lang.String getApplicationsJsonStringInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput"></a>

```java
public CfwAclRuleV1Destination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput"></a>

```java
public java.lang.Number getDirectionInput();
```

- *Type:* java.lang.Number

---

##### `longConnectEnableInput`<sup>Optional</sup> <a name="longConnectEnableInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput"></a>

```java
public java.lang.Number getLongConnectEnableInput();
```

- *Type:* java.lang.Number

---

##### `longConnectTimeHourInput`<sup>Optional</sup> <a name="longConnectTimeHourInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput"></a>

```java
public java.lang.Number getLongConnectTimeHourInput();
```

- *Type:* java.lang.Number

---

##### `longConnectTimeInput`<sup>Optional</sup> <a name="longConnectTimeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput"></a>

```java
public java.lang.Number getLongConnectTimeInput();
```

- *Type:* java.lang.Number

---

##### `longConnectTimeMinuteInput`<sup>Optional</sup> <a name="longConnectTimeMinuteInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput"></a>

```java
public java.lang.Number getLongConnectTimeMinuteInput();
```

- *Type:* java.lang.Number

---

##### `longConnectTimeSecondInput`<sup>Optional</sup> <a name="longConnectTimeSecondInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput"></a>

```java
public java.lang.Number getLongConnectTimeSecondInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `sequenceInput`<sup>Optional</sup> <a name="sequenceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput"></a>

```java
public CfwAclRuleV1Sequence getSequenceInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput"></a>

```java
public CfwAclRuleV1Service getServiceInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput"></a>

```java
public CfwAclRuleV1Source getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput"></a>

```java
public java.lang.Number getStatusInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType"></a>

```java
public java.lang.Number getActionType();
```

- *Type:* java.lang.Number

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType"></a>

```java
public java.lang.Number getAddressType();
```

- *Type:* java.lang.Number

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications"></a>

```java
public java.util.List<java.lang.String> getApplications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationsJsonString`<sup>Required</sup> <a name="applicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString"></a>

```java
public java.lang.String getApplicationsJsonString();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction"></a>

```java
public java.lang.Number getDirection();
```

- *Type:* java.lang.Number

---

##### `longConnectEnable`<sup>Required</sup> <a name="longConnectEnable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable"></a>

```java
public java.lang.Number getLongConnectEnable();
```

- *Type:* java.lang.Number

---

##### `longConnectTime`<sup>Required</sup> <a name="longConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime"></a>

```java
public java.lang.Number getLongConnectTime();
```

- *Type:* java.lang.Number

---

##### `longConnectTimeHour`<sup>Required</sup> <a name="longConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour"></a>

```java
public java.lang.Number getLongConnectTimeHour();
```

- *Type:* java.lang.Number

---

##### `longConnectTimeMinute`<sup>Required</sup> <a name="longConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute"></a>

```java
public java.lang.Number getLongConnectTimeMinute();
```

- *Type:* java.lang.Number

---

##### `longConnectTimeSecond`<sup>Required</sup> <a name="longConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond"></a>

```java
public java.lang.Number getLongConnectTimeSecond();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CfwAclRuleV1Config <a name="CfwAclRuleV1Config" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1Config;

CfwAclRuleV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .actionType(java.lang.Number)
    .addressType(java.lang.Number)
    .destination(CfwAclRuleV1Destination)
    .longConnectEnable(java.lang.Number)
    .name(java.lang.String)
    .objectId(java.lang.String)
    .sequence(CfwAclRuleV1Sequence)
    .service(CfwAclRuleV1Service)
    .source(CfwAclRuleV1Source)
    .status(java.lang.Number)
    .type(java.lang.Number)
//  .applications(java.util.List<java.lang.String>)
//  .applicationsJsonString(java.lang.String)
//  .description(java.lang.String)
//  .direction(java.lang.Number)
//  .longConnectTime(java.lang.Number)
//  .longConnectTimeHour(java.lang.Number)
//  .longConnectTimeMinute(java.lang.Number)
//  .longConnectTimeSecond(java.lang.Number)
//  .timeouts(CfwAclRuleV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType">actionType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType">addressType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable">longConnectEnable</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | sequence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | source block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status">status</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications">applications</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString">applicationsJsonString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction">direction</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime">longConnectTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour">longConnectTimeHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute">longConnectTimeMinute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond">longConnectTimeSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType"></a>

```java
public java.lang.Number getActionType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}.

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType"></a>

```java
public java.lang.Number getAddressType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination"></a>

```java
public CfwAclRuleV1Destination getDestination();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#destination CfwAclRuleV1#destination}

---

##### `longConnectEnable`<sup>Required</sup> <a name="longConnectEnable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable"></a>

```java
public java.lang.Number getLongConnectEnable();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}.

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence"></a>

```java
public CfwAclRuleV1Sequence getSequence();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#sequence CfwAclRuleV1#sequence}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service"></a>

```java
public CfwAclRuleV1Service getService();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service CfwAclRuleV1#service}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source"></a>

```java
public CfwAclRuleV1Source getSource();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source CfwAclRuleV1#source}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications"></a>

```java
public java.util.List<java.lang.String> getApplications();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}.

---

##### `applicationsJsonString`<sup>Optional</sup> <a name="applicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString"></a>

```java
public java.lang.String getApplicationsJsonString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction"></a>

```java
public java.lang.Number getDirection();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}.

---

##### `longConnectTime`<sup>Optional</sup> <a name="longConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime"></a>

```java
public java.lang.Number getLongConnectTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}.

---

##### `longConnectTimeHour`<sup>Optional</sup> <a name="longConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour"></a>

```java
public java.lang.Number getLongConnectTimeHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}.

---

##### `longConnectTimeMinute`<sup>Optional</sup> <a name="longConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute"></a>

```java
public java.lang.Number getLongConnectTimeMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}.

---

##### `longConnectTimeSecond`<sup>Optional</sup> <a name="longConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond"></a>

```java
public java.lang.Number getLongConnectTimeSecond();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts"></a>

```java
public CfwAclRuleV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#timeouts CfwAclRuleV1#timeouts}

---

### CfwAclRuleV1Destination <a name="CfwAclRuleV1Destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1Destination;

CfwAclRuleV1Destination.builder()
    .type(java.lang.Number)
//  .address(java.lang.String)
//  .addressGroup(java.util.List<java.lang.String>)
//  .addressSetId(java.lang.String)
//  .addressSetName(java.lang.String)
//  .addressSetType(java.lang.Number)
//  .addressType(java.lang.Number)
//  .domainAddressName(java.lang.String)
//  .domainSetId(java.lang.String)
//  .domainSetName(java.lang.String)
//  .ipAddress(java.util.List<java.lang.String>)
//  .predefinedGroup(java.util.List<java.lang.String>)
//  .regionList(IResolvable)
//  .regionList(java.util.List<CfwAclRuleV1DestinationRegionListStruct>)
//  .regionListJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup">addressGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId">addressSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName">addressSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType">addressSetType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType">addressType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName">domainAddressName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId">domainSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName">domainSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress">ipAddress</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup">predefinedGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList">regionList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>></code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson">regionListJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `addressGroup`<sup>Optional</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup"></a>

```java
public java.util.List<java.lang.String> getAddressGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `addressSetId`<sup>Optional</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId"></a>

```java
public java.lang.String getAddressSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `addressSetName`<sup>Optional</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName"></a>

```java
public java.lang.String getAddressSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `addressSetType`<sup>Optional</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType"></a>

```java
public java.lang.Number getAddressSetType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `addressType`<sup>Optional</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType"></a>

```java
public java.lang.Number getAddressType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `domainAddressName`<sup>Optional</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName"></a>

```java
public java.lang.String getDomainAddressName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `domainSetId`<sup>Optional</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId"></a>

```java
public java.lang.String getDomainSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `domainSetName`<sup>Optional</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName"></a>

```java
public java.lang.String getDomainSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress"></a>

```java
public java.util.List<java.lang.String> getIpAddress();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `predefinedGroup`<sup>Optional</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `regionList`<sup>Optional</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList"></a>

```java
public java.lang.Object getRegionList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>>

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `regionListJson`<sup>Optional</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson"></a>

```java
public java.lang.String getRegionListJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1DestinationRegionListStruct <a name="CfwAclRuleV1DestinationRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1DestinationRegionListStruct;

CfwAclRuleV1DestinationRegionListStruct.builder()
//  .regionId(java.lang.String)
//  .regionType(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId">regionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType">regionType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId"></a>

```java
public java.lang.String getRegionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `regionType`<sup>Optional</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType"></a>

```java
public java.lang.Number getRegionType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Sequence <a name="CfwAclRuleV1Sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1Sequence;

CfwAclRuleV1Sequence.builder()
//  .bottom(java.lang.Number)
//  .destRuleId(java.lang.String)
//  .top(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom">bottom</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId">destRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top">top</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}. |

---

##### `bottom`<sup>Optional</sup> <a name="bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom"></a>

```java
public java.lang.Number getBottom();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}.

---

##### `destRuleId`<sup>Optional</sup> <a name="destRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId"></a>

```java
public java.lang.String getDestRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}.

---

##### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top"></a>

```java
public java.lang.Number getTop();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}.

---

### CfwAclRuleV1Service <a name="CfwAclRuleV1Service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1Service;

CfwAclRuleV1Service.builder()
    .type(java.lang.Number)
//  .customService(IResolvable)
//  .customService(java.util.List<CfwAclRuleV1ServiceCustomService>)
//  .destPort(java.lang.String)
//  .predefinedGroup(java.util.List<java.lang.String>)
//  .protocol(java.lang.Number)
//  .protocols(java.util.List<java.lang.Number>)
//  .serviceGroup(java.util.List<java.lang.String>)
//  .serviceGroupNames(IResolvable)
//  .serviceGroupNames(java.util.List<CfwAclRuleV1ServiceServiceGroupNames>)
//  .serviceSetId(java.lang.String)
//  .serviceSetName(java.lang.String)
//  .serviceSetType(java.lang.Number)
//  .sourcePort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService">customService</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>></code> | custom_service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort">destPort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup">predefinedGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup">serviceGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames">serviceGroupNames</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>></code> | service_group_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId">serviceSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName">serviceSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType">serviceSetType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort">sourcePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `customService`<sup>Optional</sup> <a name="customService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService"></a>

```java
public java.lang.Object getCustomService();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>>

custom_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#custom_service CfwAclRuleV1#custom_service}

---

##### `destPort`<sup>Optional</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort"></a>

```java
public java.lang.String getDestPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `predefinedGroup`<sup>Optional</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols"></a>

```java
public java.util.List<java.lang.Number> getProtocols();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `serviceGroup`<sup>Optional</sup> <a name="serviceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup"></a>

```java
public java.util.List<java.lang.String> getServiceGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}.

---

##### `serviceGroupNames`<sup>Optional</sup> <a name="serviceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames"></a>

```java
public java.lang.Object getServiceGroupNames();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>>

service_group_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_group_names CfwAclRuleV1#service_group_names}

---

##### `serviceSetId`<sup>Optional</sup> <a name="serviceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId"></a>

```java
public java.lang.String getServiceSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}.

---

##### `serviceSetName`<sup>Optional</sup> <a name="serviceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName"></a>

```java
public java.lang.String getServiceSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}.

---

##### `serviceSetType`<sup>Optional</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType"></a>

```java
public java.lang.Number getServiceSetType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort"></a>

```java
public java.lang.String getSourcePort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceCustomService <a name="CfwAclRuleV1ServiceCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1ServiceCustomService;

CfwAclRuleV1ServiceCustomService.builder()
//  .description(java.lang.String)
//  .destPort(java.lang.String)
//  .name(java.lang.String)
//  .protocol(java.lang.Number)
//  .sourcePort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort">destPort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort">sourcePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `destPort`<sup>Optional</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort"></a>

```java
public java.lang.String getDestPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort"></a>

```java
public java.lang.String getSourcePort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceServiceGroupNames <a name="CfwAclRuleV1ServiceServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1ServiceServiceGroupNames;

CfwAclRuleV1ServiceServiceGroupNames.builder()
//  .name(java.lang.String)
//  .protocols(java.util.List<java.lang.Number>)
//  .serviceSetType(java.lang.Number)
//  .setId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType">serviceSetType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId">setId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols"></a>

```java
public java.util.List<java.lang.Number> getProtocols();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `serviceSetType`<sup>Optional</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType"></a>

```java
public java.lang.Number getServiceSetType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `setId`<sup>Optional</sup> <a name="setId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId"></a>

```java
public java.lang.String getSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}.

---

### CfwAclRuleV1Source <a name="CfwAclRuleV1Source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1Source;

CfwAclRuleV1Source.builder()
    .type(java.lang.Number)
//  .address(java.lang.String)
//  .addressGroup(java.util.List<java.lang.String>)
//  .addressSetId(java.lang.String)
//  .addressSetName(java.lang.String)
//  .addressSetType(java.lang.Number)
//  .addressType(java.lang.Number)
//  .domainAddressName(java.lang.String)
//  .domainSetId(java.lang.String)
//  .domainSetName(java.lang.String)
//  .ipAddress(java.util.List<java.lang.String>)
//  .predefinedGroup(java.util.List<java.lang.String>)
//  .regionList(IResolvable)
//  .regionList(java.util.List<CfwAclRuleV1SourceRegionListStruct>)
//  .regionListJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup">addressGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId">addressSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName">addressSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType">addressSetType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType">addressType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName">domainAddressName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId">domainSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName">domainSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress">ipAddress</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup">predefinedGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList">regionList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>></code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson">regionListJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `addressGroup`<sup>Optional</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup"></a>

```java
public java.util.List<java.lang.String> getAddressGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `addressSetId`<sup>Optional</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId"></a>

```java
public java.lang.String getAddressSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `addressSetName`<sup>Optional</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName"></a>

```java
public java.lang.String getAddressSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `addressSetType`<sup>Optional</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType"></a>

```java
public java.lang.Number getAddressSetType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `addressType`<sup>Optional</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType"></a>

```java
public java.lang.Number getAddressType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `domainAddressName`<sup>Optional</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName"></a>

```java
public java.lang.String getDomainAddressName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `domainSetId`<sup>Optional</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId"></a>

```java
public java.lang.String getDomainSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `domainSetName`<sup>Optional</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName"></a>

```java
public java.lang.String getDomainSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress"></a>

```java
public java.util.List<java.lang.String> getIpAddress();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `predefinedGroup`<sup>Optional</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `regionList`<sup>Optional</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList"></a>

```java
public java.lang.Object getRegionList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>>

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `regionListJson`<sup>Optional</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson"></a>

```java
public java.lang.String getRegionListJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1SourceRegionListStruct <a name="CfwAclRuleV1SourceRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1SourceRegionListStruct;

CfwAclRuleV1SourceRegionListStruct.builder()
//  .regionId(java.lang.String)
//  .regionType(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId">regionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType">regionType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId"></a>

```java
public java.lang.String getRegionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `regionType`<sup>Optional</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType"></a>

```java
public java.lang.Number getRegionType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Timeouts <a name="CfwAclRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1Timeouts;

CfwAclRuleV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwAclRuleV1DestinationOutputReference <a name="CfwAclRuleV1DestinationOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1DestinationOutputReference;

new CfwAclRuleV1DestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList">putRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup">resetAddressGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId">resetAddressSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName">resetAddressSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType">resetAddressSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType">resetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName">resetDomainAddressName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId">resetDomainSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName">resetDomainSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup">resetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList">resetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson">resetRegionListJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionList` <a name="putRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList"></a>

```java
public void putRegionList(IResolvable OR java.util.List<CfwAclRuleV1DestinationRegionListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAddressGroup` <a name="resetAddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup"></a>

```java
public void resetAddressGroup()
```

##### `resetAddressSetId` <a name="resetAddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId"></a>

```java
public void resetAddressSetId()
```

##### `resetAddressSetName` <a name="resetAddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName"></a>

```java
public void resetAddressSetName()
```

##### `resetAddressSetType` <a name="resetAddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType"></a>

```java
public void resetAddressSetType()
```

##### `resetAddressType` <a name="resetAddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType"></a>

```java
public void resetAddressType()
```

##### `resetDomainAddressName` <a name="resetDomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName"></a>

```java
public void resetDomainAddressName()
```

##### `resetDomainSetId` <a name="resetDomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId"></a>

```java
public void resetDomainSetId()
```

##### `resetDomainSetName` <a name="resetDomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName"></a>

```java
public void resetDomainSetName()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetPredefinedGroup` <a name="resetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup"></a>

```java
public void resetPredefinedGroup()
```

##### `resetRegionList` <a name="resetRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList"></a>

```java
public void resetRegionList()
```

##### `resetRegionListJson` <a name="resetRegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson"></a>

```java
public void resetRegionListJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList">regionList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput">addressGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput">addressSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput">addressSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput">addressSetTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput">addressTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput">domainAddressNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput">domainSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput">domainSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput">predefinedGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput">regionListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput">regionListJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup">addressGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId">addressSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName">addressSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType">addressSetType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType">addressType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName">domainAddressName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId">domainSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName">domainSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup">predefinedGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson">regionListJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList"></a>

```java
public CfwAclRuleV1DestinationRegionListStructList getRegionList();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a>

---

##### `addressGroupInput`<sup>Optional</sup> <a name="addressGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput"></a>

```java
public java.util.List<java.lang.String> getAddressGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `addressSetIdInput`<sup>Optional</sup> <a name="addressSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput"></a>

```java
public java.lang.String getAddressSetIdInput();
```

- *Type:* java.lang.String

---

##### `addressSetNameInput`<sup>Optional</sup> <a name="addressSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput"></a>

```java
public java.lang.String getAddressSetNameInput();
```

- *Type:* java.lang.String

---

##### `addressSetTypeInput`<sup>Optional</sup> <a name="addressSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput"></a>

```java
public java.lang.Number getAddressSetTypeInput();
```

- *Type:* java.lang.Number

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput"></a>

```java
public java.lang.Number getAddressTypeInput();
```

- *Type:* java.lang.Number

---

##### `domainAddressNameInput`<sup>Optional</sup> <a name="domainAddressNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput"></a>

```java
public java.lang.String getDomainAddressNameInput();
```

- *Type:* java.lang.String

---

##### `domainSetIdInput`<sup>Optional</sup> <a name="domainSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput"></a>

```java
public java.lang.String getDomainSetIdInput();
```

- *Type:* java.lang.String

---

##### `domainSetNameInput`<sup>Optional</sup> <a name="domainSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput"></a>

```java
public java.lang.String getDomainSetNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `predefinedGroupInput`<sup>Optional</sup> <a name="predefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput"></a>

```java
public java.lang.Object getRegionListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>>

---

##### `regionListJsonInput`<sup>Optional</sup> <a name="regionListJsonInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput"></a>

```java
public java.lang.String getRegionListJsonInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `addressGroup`<sup>Required</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup"></a>

```java
public java.util.List<java.lang.String> getAddressGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressSetId`<sup>Required</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId"></a>

```java
public java.lang.String getAddressSetId();
```

- *Type:* java.lang.String

---

##### `addressSetName`<sup>Required</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName"></a>

```java
public java.lang.String getAddressSetName();
```

- *Type:* java.lang.String

---

##### `addressSetType`<sup>Required</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType"></a>

```java
public java.lang.Number getAddressSetType();
```

- *Type:* java.lang.Number

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType"></a>

```java
public java.lang.Number getAddressType();
```

- *Type:* java.lang.Number

---

##### `domainAddressName`<sup>Required</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName"></a>

```java
public java.lang.String getDomainAddressName();
```

- *Type:* java.lang.String

---

##### `domainSetId`<sup>Required</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId"></a>

```java
public java.lang.String getDomainSetId();
```

- *Type:* java.lang.String

---

##### `domainSetName`<sup>Required</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName"></a>

```java
public java.lang.String getDomainSetName();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress"></a>

```java
public java.util.List<java.lang.String> getIpAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `predefinedGroup`<sup>Required</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionListJson`<sup>Required</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson"></a>

```java
public java.lang.String getRegionListJson();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue"></a>

```java
public CfwAclRuleV1Destination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---


### CfwAclRuleV1DestinationRegionListStructList <a name="CfwAclRuleV1DestinationRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1DestinationRegionListStructList;

new CfwAclRuleV1DestinationRegionListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get"></a>

```java
public CfwAclRuleV1DestinationRegionListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>>

---


### CfwAclRuleV1DestinationRegionListStructOutputReference <a name="CfwAclRuleV1DestinationRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1DestinationRegionListStructOutputReference;

new CfwAclRuleV1DestinationRegionListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId">resetRegionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType">resetRegionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionId` <a name="resetRegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId"></a>

```java
public void resetRegionId()
```

##### `resetRegionType` <a name="resetRegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType"></a>

```java
public void resetRegionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput">regionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput">regionTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId">regionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType">regionType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionIdInput`<sup>Optional</sup> <a name="regionIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput"></a>

```java
public java.lang.String getRegionIdInput();
```

- *Type:* java.lang.String

---

##### `regionTypeInput`<sup>Optional</sup> <a name="regionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput"></a>

```java
public java.lang.Number getRegionTypeInput();
```

- *Type:* java.lang.Number

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId"></a>

```java
public java.lang.String getRegionId();
```

- *Type:* java.lang.String

---

##### `regionType`<sup>Required</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType"></a>

```java
public java.lang.Number getRegionType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>

---


### CfwAclRuleV1SequenceOutputReference <a name="CfwAclRuleV1SequenceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1SequenceOutputReference;

new CfwAclRuleV1SequenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom">resetBottom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId">resetDestRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop">resetTop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBottom` <a name="resetBottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom"></a>

```java
public void resetBottom()
```

##### `resetDestRuleId` <a name="resetDestRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId"></a>

```java
public void resetDestRuleId()
```

##### `resetTop` <a name="resetTop" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop"></a>

```java
public void resetTop()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput">bottomInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput">destRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput">topInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom">bottom</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId">destRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top">top</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bottomInput`<sup>Optional</sup> <a name="bottomInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput"></a>

```java
public java.lang.Number getBottomInput();
```

- *Type:* java.lang.Number

---

##### `destRuleIdInput`<sup>Optional</sup> <a name="destRuleIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput"></a>

```java
public java.lang.String getDestRuleIdInput();
```

- *Type:* java.lang.String

---

##### `topInput`<sup>Optional</sup> <a name="topInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput"></a>

```java
public java.lang.Number getTopInput();
```

- *Type:* java.lang.Number

---

##### `bottom`<sup>Required</sup> <a name="bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom"></a>

```java
public java.lang.Number getBottom();
```

- *Type:* java.lang.Number

---

##### `destRuleId`<sup>Required</sup> <a name="destRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId"></a>

```java
public java.lang.String getDestRuleId();
```

- *Type:* java.lang.String

---

##### `top`<sup>Required</sup> <a name="top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top"></a>

```java
public java.lang.Number getTop();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue"></a>

```java
public CfwAclRuleV1Sequence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---


### CfwAclRuleV1ServiceCustomServiceList <a name="CfwAclRuleV1ServiceCustomServiceList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1ServiceCustomServiceList;

new CfwAclRuleV1ServiceCustomServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get"></a>

```java
public CfwAclRuleV1ServiceCustomServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>>

---


### CfwAclRuleV1ServiceCustomServiceOutputReference <a name="CfwAclRuleV1ServiceCustomServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1ServiceCustomServiceOutputReference;

new CfwAclRuleV1ServiceCustomServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort">resetDestPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort">resetSourcePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestPort` <a name="resetDestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort"></a>

```java
public void resetDestPort()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSourcePort` <a name="resetSourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort"></a>

```java
public void resetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput">destPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput">sourcePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort">destPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort">sourcePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destPortInput`<sup>Optional</sup> <a name="destPortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput"></a>

```java
public java.lang.String getDestPortInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput"></a>

```java
public java.lang.Number getProtocolInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput"></a>

```java
public java.lang.String getSourcePortInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destPort`<sup>Required</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort"></a>

```java
public java.lang.String getDestPort();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort"></a>

```java
public java.lang.String getSourcePort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>

---


### CfwAclRuleV1ServiceOutputReference <a name="CfwAclRuleV1ServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1ServiceOutputReference;

new CfwAclRuleV1ServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService">putCustomService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames">putServiceGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService">resetCustomService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort">resetDestPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup">resetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup">resetServiceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames">resetServiceGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId">resetServiceSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName">resetServiceSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType">resetServiceSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort">resetSourcePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomService` <a name="putCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService"></a>

```java
public void putCustomService(IResolvable OR java.util.List<CfwAclRuleV1ServiceCustomService> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>>

---

##### `putServiceGroupNames` <a name="putServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames"></a>

```java
public void putServiceGroupNames(IResolvable OR java.util.List<CfwAclRuleV1ServiceServiceGroupNames> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>>

---

##### `resetCustomService` <a name="resetCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService"></a>

```java
public void resetCustomService()
```

##### `resetDestPort` <a name="resetDestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort"></a>

```java
public void resetDestPort()
```

##### `resetPredefinedGroup` <a name="resetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup"></a>

```java
public void resetPredefinedGroup()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetServiceGroup` <a name="resetServiceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup"></a>

```java
public void resetServiceGroup()
```

##### `resetServiceGroupNames` <a name="resetServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames"></a>

```java
public void resetServiceGroupNames()
```

##### `resetServiceSetId` <a name="resetServiceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId"></a>

```java
public void resetServiceSetId()
```

##### `resetServiceSetName` <a name="resetServiceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName"></a>

```java
public void resetServiceSetName()
```

##### `resetServiceSetType` <a name="resetServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType"></a>

```java
public void resetServiceSetType()
```

##### `resetSourcePort` <a name="resetSourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort"></a>

```java
public void resetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService">customService</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames">serviceGroupNames</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput">customServiceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput">destPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput">predefinedGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput">serviceGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput">serviceGroupNamesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput">serviceSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput">serviceSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput">serviceSetTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput">sourcePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort">destPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup">predefinedGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup">serviceGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId">serviceSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName">serviceSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType">serviceSetType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort">sourcePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customService`<sup>Required</sup> <a name="customService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService"></a>

```java
public CfwAclRuleV1ServiceCustomServiceList getCustomService();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a>

---

##### `serviceGroupNames`<sup>Required</sup> <a name="serviceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames"></a>

```java
public CfwAclRuleV1ServiceServiceGroupNamesList getServiceGroupNames();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a>

---

##### `customServiceInput`<sup>Optional</sup> <a name="customServiceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput"></a>

```java
public java.lang.Object getCustomServiceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>>

---

##### `destPortInput`<sup>Optional</sup> <a name="destPortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput"></a>

```java
public java.lang.String getDestPortInput();
```

- *Type:* java.lang.String

---

##### `predefinedGroupInput`<sup>Optional</sup> <a name="predefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput"></a>

```java
public java.lang.Number getProtocolInput();
```

- *Type:* java.lang.Number

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.Number> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `serviceGroupInput`<sup>Optional</sup> <a name="serviceGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput"></a>

```java
public java.util.List<java.lang.String> getServiceGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceGroupNamesInput`<sup>Optional</sup> <a name="serviceGroupNamesInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput"></a>

```java
public java.lang.Object getServiceGroupNamesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>>

---

##### `serviceSetIdInput`<sup>Optional</sup> <a name="serviceSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput"></a>

```java
public java.lang.String getServiceSetIdInput();
```

- *Type:* java.lang.String

---

##### `serviceSetNameInput`<sup>Optional</sup> <a name="serviceSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput"></a>

```java
public java.lang.String getServiceSetNameInput();
```

- *Type:* java.lang.String

---

##### `serviceSetTypeInput`<sup>Optional</sup> <a name="serviceSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput"></a>

```java
public java.lang.Number getServiceSetTypeInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput"></a>

```java
public java.lang.String getSourcePortInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `destPort`<sup>Required</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort"></a>

```java
public java.lang.String getDestPort();
```

- *Type:* java.lang.String

---

##### `predefinedGroup`<sup>Required</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.Number> getProtocols();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `serviceGroup`<sup>Required</sup> <a name="serviceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup"></a>

```java
public java.util.List<java.lang.String> getServiceGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceSetId`<sup>Required</sup> <a name="serviceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId"></a>

```java
public java.lang.String getServiceSetId();
```

- *Type:* java.lang.String

---

##### `serviceSetName`<sup>Required</sup> <a name="serviceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName"></a>

```java
public java.lang.String getServiceSetName();
```

- *Type:* java.lang.String

---

##### `serviceSetType`<sup>Required</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType"></a>

```java
public java.lang.Number getServiceSetType();
```

- *Type:* java.lang.Number

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort"></a>

```java
public java.lang.String getSourcePort();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue"></a>

```java
public CfwAclRuleV1Service getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---


### CfwAclRuleV1ServiceServiceGroupNamesList <a name="CfwAclRuleV1ServiceServiceGroupNamesList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1ServiceServiceGroupNamesList;

new CfwAclRuleV1ServiceServiceGroupNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get"></a>

```java
public CfwAclRuleV1ServiceServiceGroupNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>>

---


### CfwAclRuleV1ServiceServiceGroupNamesOutputReference <a name="CfwAclRuleV1ServiceServiceGroupNamesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference;

new CfwAclRuleV1ServiceServiceGroupNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType">resetServiceSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId">resetSetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetServiceSetType` <a name="resetServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType"></a>

```java
public void resetServiceSetType()
```

##### `resetSetId` <a name="resetSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId"></a>

```java
public void resetSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput">serviceSetTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput">setIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType">serviceSetType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId">setId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.Number> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `serviceSetTypeInput`<sup>Optional</sup> <a name="serviceSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput"></a>

```java
public java.lang.Number getServiceSetTypeInput();
```

- *Type:* java.lang.Number

---

##### `setIdInput`<sup>Optional</sup> <a name="setIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput"></a>

```java
public java.lang.String getSetIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.Number> getProtocols();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `serviceSetType`<sup>Required</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType"></a>

```java
public java.lang.Number getServiceSetType();
```

- *Type:* java.lang.Number

---

##### `setId`<sup>Required</sup> <a name="setId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId"></a>

```java
public java.lang.String getSetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>

---


### CfwAclRuleV1SourceOutputReference <a name="CfwAclRuleV1SourceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1SourceOutputReference;

new CfwAclRuleV1SourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList">putRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup">resetAddressGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId">resetAddressSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName">resetAddressSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType">resetAddressSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType">resetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName">resetDomainAddressName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId">resetDomainSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName">resetDomainSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup">resetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList">resetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson">resetRegionListJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionList` <a name="putRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList"></a>

```java
public void putRegionList(IResolvable OR java.util.List<CfwAclRuleV1SourceRegionListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAddressGroup` <a name="resetAddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup"></a>

```java
public void resetAddressGroup()
```

##### `resetAddressSetId` <a name="resetAddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId"></a>

```java
public void resetAddressSetId()
```

##### `resetAddressSetName` <a name="resetAddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName"></a>

```java
public void resetAddressSetName()
```

##### `resetAddressSetType` <a name="resetAddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType"></a>

```java
public void resetAddressSetType()
```

##### `resetAddressType` <a name="resetAddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType"></a>

```java
public void resetAddressType()
```

##### `resetDomainAddressName` <a name="resetDomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName"></a>

```java
public void resetDomainAddressName()
```

##### `resetDomainSetId` <a name="resetDomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId"></a>

```java
public void resetDomainSetId()
```

##### `resetDomainSetName` <a name="resetDomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName"></a>

```java
public void resetDomainSetName()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetPredefinedGroup` <a name="resetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup"></a>

```java
public void resetPredefinedGroup()
```

##### `resetRegionList` <a name="resetRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList"></a>

```java
public void resetRegionList()
```

##### `resetRegionListJson` <a name="resetRegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson"></a>

```java
public void resetRegionListJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList">regionList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput">addressGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput">addressSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput">addressSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput">addressSetTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput">addressTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput">domainAddressNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput">domainSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput">domainSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput">predefinedGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput">regionListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput">regionListJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup">addressGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId">addressSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName">addressSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType">addressSetType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType">addressType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName">domainAddressName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId">domainSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName">domainSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup">predefinedGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson">regionListJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList"></a>

```java
public CfwAclRuleV1SourceRegionListStructList getRegionList();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a>

---

##### `addressGroupInput`<sup>Optional</sup> <a name="addressGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput"></a>

```java
public java.util.List<java.lang.String> getAddressGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `addressSetIdInput`<sup>Optional</sup> <a name="addressSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput"></a>

```java
public java.lang.String getAddressSetIdInput();
```

- *Type:* java.lang.String

---

##### `addressSetNameInput`<sup>Optional</sup> <a name="addressSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput"></a>

```java
public java.lang.String getAddressSetNameInput();
```

- *Type:* java.lang.String

---

##### `addressSetTypeInput`<sup>Optional</sup> <a name="addressSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput"></a>

```java
public java.lang.Number getAddressSetTypeInput();
```

- *Type:* java.lang.Number

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput"></a>

```java
public java.lang.Number getAddressTypeInput();
```

- *Type:* java.lang.Number

---

##### `domainAddressNameInput`<sup>Optional</sup> <a name="domainAddressNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput"></a>

```java
public java.lang.String getDomainAddressNameInput();
```

- *Type:* java.lang.String

---

##### `domainSetIdInput`<sup>Optional</sup> <a name="domainSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput"></a>

```java
public java.lang.String getDomainSetIdInput();
```

- *Type:* java.lang.String

---

##### `domainSetNameInput`<sup>Optional</sup> <a name="domainSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput"></a>

```java
public java.lang.String getDomainSetNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `predefinedGroupInput`<sup>Optional</sup> <a name="predefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput"></a>

```java
public java.lang.Object getRegionListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>>

---

##### `regionListJsonInput`<sup>Optional</sup> <a name="regionListJsonInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput"></a>

```java
public java.lang.String getRegionListJsonInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `addressGroup`<sup>Required</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup"></a>

```java
public java.util.List<java.lang.String> getAddressGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressSetId`<sup>Required</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId"></a>

```java
public java.lang.String getAddressSetId();
```

- *Type:* java.lang.String

---

##### `addressSetName`<sup>Required</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName"></a>

```java
public java.lang.String getAddressSetName();
```

- *Type:* java.lang.String

---

##### `addressSetType`<sup>Required</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType"></a>

```java
public java.lang.Number getAddressSetType();
```

- *Type:* java.lang.Number

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType"></a>

```java
public java.lang.Number getAddressType();
```

- *Type:* java.lang.Number

---

##### `domainAddressName`<sup>Required</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName"></a>

```java
public java.lang.String getDomainAddressName();
```

- *Type:* java.lang.String

---

##### `domainSetId`<sup>Required</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId"></a>

```java
public java.lang.String getDomainSetId();
```

- *Type:* java.lang.String

---

##### `domainSetName`<sup>Required</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName"></a>

```java
public java.lang.String getDomainSetName();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress"></a>

```java
public java.util.List<java.lang.String> getIpAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `predefinedGroup`<sup>Required</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup"></a>

```java
public java.util.List<java.lang.String> getPredefinedGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionListJson`<sup>Required</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson"></a>

```java
public java.lang.String getRegionListJson();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue"></a>

```java
public CfwAclRuleV1Source getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---


### CfwAclRuleV1SourceRegionListStructList <a name="CfwAclRuleV1SourceRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1SourceRegionListStructList;

new CfwAclRuleV1SourceRegionListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get"></a>

```java
public CfwAclRuleV1SourceRegionListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>>

---


### CfwAclRuleV1SourceRegionListStructOutputReference <a name="CfwAclRuleV1SourceRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1SourceRegionListStructOutputReference;

new CfwAclRuleV1SourceRegionListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId">resetRegionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType">resetRegionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionId` <a name="resetRegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId"></a>

```java
public void resetRegionId()
```

##### `resetRegionType` <a name="resetRegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType"></a>

```java
public void resetRegionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput">regionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput">regionTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId">regionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType">regionType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionIdInput`<sup>Optional</sup> <a name="regionIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput"></a>

```java
public java.lang.String getRegionIdInput();
```

- *Type:* java.lang.String

---

##### `regionTypeInput`<sup>Optional</sup> <a name="regionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput"></a>

```java
public java.lang.Number getRegionTypeInput();
```

- *Type:* java.lang.Number

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId"></a>

```java
public java.lang.String getRegionId();
```

- *Type:* java.lang.String

---

##### `regionType`<sup>Required</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType"></a>

```java
public java.lang.Number getRegionType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>

---


### CfwAclRuleV1TimeoutsOutputReference <a name="CfwAclRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cfw_acl_rule_v1.CfwAclRuleV1TimeoutsOutputReference;

new CfwAclRuleV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---



