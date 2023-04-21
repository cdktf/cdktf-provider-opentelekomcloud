# `opentelekomcloud_ces_alarmrule`

Refer to the Terraform Registory for docs: [`opentelekomcloud_ces_alarmrule`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule).

# `cesAlarmrule` Submodule <a name="`cesAlarmrule` Submodule" id="@cdktf/provider-opentelekomcloud.cesAlarmrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesAlarmrule <a name="CesAlarmrule" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule opentelekomcloud_ces_alarmrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmrule;

CesAlarmrule.Builder.create(Construct scope, java.lang.String id)
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
    .alarmName(java.lang.String)
    .condition(CesAlarmruleCondition)
    .metric(CesAlarmruleMetric)
//  .alarmActionEnabled(java.lang.Boolean)
//  .alarmActionEnabled(IResolvable)
//  .alarmActions(IResolvable)
//  .alarmActions(java.util.List<CesAlarmruleAlarmActions>)
//  .alarmDescription(java.lang.String)
//  .alarmEnabled(java.lang.Boolean)
//  .alarmEnabled(IResolvable)
//  .alarmLevel(java.lang.Number)
//  .id(java.lang.String)
//  .okActions(IResolvable)
//  .okActions(java.util.List<CesAlarmruleOkActions>)
//  .timeouts(CesAlarmruleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmName">alarmName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.metric">metric</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActionEnabled">alarmActionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActions">alarmActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>></code> | alarm_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmEnabled">alarmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmLevel">alarmLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#id CesAlarmrule#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.okActions">okActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>></code> | ok_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}.

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#condition CesAlarmrule#condition}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.metric"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#metric CesAlarmrule#metric}

---

##### `alarmActionEnabled`<sup>Optional</sup> <a name="alarmActionEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmActions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>>

alarm_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_actions CesAlarmrule#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}.

---

##### `alarmEnabled`<sup>Optional</sup> <a name="alarmEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}.

---

##### `alarmLevel`<sup>Optional</sup> <a name="alarmLevel" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.alarmLevel"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#id CesAlarmrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.okActions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>>

ok_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#ok_actions CesAlarmrule#ok_actions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#timeouts CesAlarmrule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putAlarmActions">putAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putOkActions">putOkActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActionEnabled">resetAlarmActionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmEnabled">resetAlarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmLevel">resetAlarmLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAlarmActions` <a name="putAlarmActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putAlarmActions"></a>

```java
public void putAlarmActions(IResolvable OR java.util.List<CesAlarmruleAlarmActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putAlarmActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition"></a>

```java
public void putCondition(CesAlarmruleCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric"></a>

```java
public void putMetric(CesAlarmruleMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

---

##### `putOkActions` <a name="putOkActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putOkActions"></a>

```java
public void putOkActions(IResolvable OR java.util.List<CesAlarmruleOkActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putOkActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts"></a>

```java
public void putTimeouts(CesAlarmruleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a>

---

##### `resetAlarmActionEnabled` <a name="resetAlarmActionEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActionEnabled"></a>

```java
public void resetAlarmActionEnabled()
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmActions"></a>

```java
public void resetAlarmActions()
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmDescription"></a>

```java
public void resetAlarmDescription()
```

##### `resetAlarmEnabled` <a name="resetAlarmEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmEnabled"></a>

```java
public void resetAlarmEnabled()
```

##### `resetAlarmLevel` <a name="resetAlarmLevel" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetAlarmLevel"></a>

```java
public void resetAlarmLevel()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetId"></a>

```java
public void resetId()
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetOkActions"></a>

```java
public void resetOkActions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmrule;

CesAlarmrule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmrule;

CesAlarmrule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmrule;

CesAlarmrule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActions">alarmActions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList">CesAlarmruleAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmState">alarmState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference">CesAlarmruleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference">CesAlarmruleMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActions">okActions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList">CesAlarmruleOkActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference">CesAlarmruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.updateTime">updateTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabledInput">alarmActionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionsInput">alarmActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabledInput">alarmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevelInput">alarmLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActionsInput">okActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabled">alarmActionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabled">alarmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevel">alarmLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActions"></a>

```java
public CesAlarmruleAlarmActionsList getAlarmActions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList">CesAlarmruleAlarmActionsList</a>

---

##### `alarmState`<sup>Required</sup> <a name="alarmState" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmState"></a>

```java
public java.lang.String getAlarmState();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.condition"></a>

```java
public CesAlarmruleConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference">CesAlarmruleConditionOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metric"></a>

```java
public CesAlarmruleMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference">CesAlarmruleMetricOutputReference</a>

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActions"></a>

```java
public CesAlarmruleOkActionsList getOkActions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList">CesAlarmruleOkActionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeouts"></a>

```java
public CesAlarmruleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference">CesAlarmruleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.updateTime"></a>

```java
public java.lang.Number getUpdateTime();
```

- *Type:* java.lang.Number

---

##### `alarmActionEnabledInput`<sup>Optional</sup> <a name="alarmActionEnabledInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabledInput"></a>

```java
public java.lang.Object getAlarmActionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionsInput"></a>

```java
public java.lang.Object getAlarmActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>>

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescriptionInput"></a>

```java
public java.lang.String getAlarmDescriptionInput();
```

- *Type:* java.lang.String

---

##### `alarmEnabledInput`<sup>Optional</sup> <a name="alarmEnabledInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabledInput"></a>

```java
public java.lang.Object getAlarmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarmLevelInput`<sup>Optional</sup> <a name="alarmLevelInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevelInput"></a>

```java
public java.lang.Number getAlarmLevelInput();
```

- *Type:* java.lang.Number

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.conditionInput"></a>

```java
public CesAlarmruleCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.metricInput"></a>

```java
public CesAlarmruleMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.okActionsInput"></a>

```java
public java.lang.Object getOkActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `alarmActionEnabled`<sup>Required</sup> <a name="alarmActionEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmActionEnabled"></a>

```java
public java.lang.Object getAlarmActionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

---

##### `alarmEnabled`<sup>Required</sup> <a name="alarmEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmEnabled"></a>

```java
public java.lang.Object getAlarmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alarmLevel`<sup>Required</sup> <a name="alarmLevel" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmLevel"></a>

```java
public java.lang.Number getAlarmLevel();
```

- *Type:* java.lang.Number

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmrule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CesAlarmruleAlarmActions <a name="CesAlarmruleAlarmActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleAlarmActions;

CesAlarmruleAlarmActions.builder()
    .notificationList(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.notificationList">notificationList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#type CesAlarmrule#type}. |

---

##### `notificationList`<sup>Required</sup> <a name="notificationList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.notificationList"></a>

```java
public java.util.List<java.lang.String> getNotificationList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#type CesAlarmrule#type}.

---

### CesAlarmruleCondition <a name="CesAlarmruleCondition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleCondition;

CesAlarmruleCondition.builder()
    .comparisonOperator(java.lang.String)
    .count(java.lang.Number)
    .filter(java.lang.String)
    .period(java.lang.Number)
    .value(java.lang.Number)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#comparison_operator CesAlarmrule#comparison_operator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#count CesAlarmrule#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#filter CesAlarmrule#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#period CesAlarmrule#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#value CesAlarmrule#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#unit CesAlarmrule#unit}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#comparison_operator CesAlarmrule#comparison_operator}.

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#count CesAlarmrule#count}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#filter CesAlarmrule#filter}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#period CesAlarmrule#period}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#value CesAlarmrule#value}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#unit CesAlarmrule#unit}.

---

### CesAlarmruleConfig <a name="CesAlarmruleConfig" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleConfig;

CesAlarmruleConfig.builder()
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
    .alarmName(java.lang.String)
    .condition(CesAlarmruleCondition)
    .metric(CesAlarmruleMetric)
//  .alarmActionEnabled(java.lang.Boolean)
//  .alarmActionEnabled(IResolvable)
//  .alarmActions(IResolvable)
//  .alarmActions(java.util.List<CesAlarmruleAlarmActions>)
//  .alarmDescription(java.lang.String)
//  .alarmEnabled(java.lang.Boolean)
//  .alarmEnabled(IResolvable)
//  .alarmLevel(java.lang.Number)
//  .id(java.lang.String)
//  .okActions(IResolvable)
//  .okActions(java.util.List<CesAlarmruleOkActions>)
//  .timeouts(CesAlarmruleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActionEnabled">alarmActionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActions">alarmActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>></code> | alarm_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmEnabled">alarmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmLevel">alarmLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#id CesAlarmrule#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.okActions">okActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>></code> | ok_actions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_name CesAlarmrule#alarm_name}.

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.condition"></a>

```java
public CesAlarmruleCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#condition CesAlarmrule#condition}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.metric"></a>

```java
public CesAlarmruleMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#metric CesAlarmrule#metric}

---

##### `alarmActionEnabled`<sup>Optional</sup> <a name="alarmActionEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActionEnabled"></a>

```java
public java.lang.Object getAlarmActionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_action_enabled CesAlarmrule#alarm_action_enabled}.

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmActions"></a>

```java
public java.lang.Object getAlarmActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>>

alarm_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_actions CesAlarmrule#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_description CesAlarmrule#alarm_description}.

---

##### `alarmEnabled`<sup>Optional</sup> <a name="alarmEnabled" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmEnabled"></a>

```java
public java.lang.Object getAlarmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_enabled CesAlarmrule#alarm_enabled}.

---

##### `alarmLevel`<sup>Optional</sup> <a name="alarmLevel" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.alarmLevel"></a>

```java
public java.lang.Number getAlarmLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#alarm_level CesAlarmrule#alarm_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#id CesAlarmrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.okActions"></a>

```java
public java.lang.Object getOkActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>>

ok_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#ok_actions CesAlarmrule#ok_actions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConfig.property.timeouts"></a>

```java
public CesAlarmruleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#timeouts CesAlarmrule#timeouts}

---

### CesAlarmruleMetric <a name="CesAlarmruleMetric" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleMetric;

CesAlarmruleMetric.builder()
    .dimensions(IResolvable)
    .dimensions(java.util.List<CesAlarmruleMetricDimensions>)
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#metric_name CesAlarmrule#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#namespace CesAlarmrule#namespace}. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#dimensions CesAlarmrule#dimensions}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#metric_name CesAlarmrule#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#namespace CesAlarmrule#namespace}.

---

### CesAlarmruleMetricDimensions <a name="CesAlarmruleMetricDimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleMetricDimensions;

CesAlarmruleMetricDimensions.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#name CesAlarmrule#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#value CesAlarmrule#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#name CesAlarmrule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#value CesAlarmrule#value}.

---

### CesAlarmruleOkActions <a name="CesAlarmruleOkActions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleOkActions;

CesAlarmruleOkActions.builder()
    .notificationList(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.notificationList">notificationList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#type CesAlarmrule#type}. |

---

##### `notificationList`<sup>Required</sup> <a name="notificationList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.notificationList"></a>

```java
public java.util.List<java.lang.String> getNotificationList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#notification_list CesAlarmrule#notification_list}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#type CesAlarmrule#type}.

---

### CesAlarmruleTimeouts <a name="CesAlarmruleTimeouts" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleTimeouts;

CesAlarmruleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#create CesAlarmrule#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#delete CesAlarmrule#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#update CesAlarmrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#create CesAlarmrule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#delete CesAlarmrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/ces_alarmrule#update CesAlarmrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesAlarmruleAlarmActionsList <a name="CesAlarmruleAlarmActionsList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleAlarmActionsList;

new CesAlarmruleAlarmActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.get"></a>

```java
public CesAlarmruleAlarmActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a>>

---


### CesAlarmruleAlarmActionsOutputReference <a name="CesAlarmruleAlarmActionsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleAlarmActionsOutputReference;

new CesAlarmruleAlarmActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationListInput">notificationListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationList">notificationList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationListInput`<sup>Optional</sup> <a name="notificationListInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationListInput"></a>

```java
public java.util.List<java.lang.String> getNotificationListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `notificationList`<sup>Required</sup> <a name="notificationList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.notificationList"></a>

```java
public java.util.List<java.lang.String> getNotificationList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleAlarmActions">CesAlarmruleAlarmActions</a> OR com.hashicorp.cdktf.IResolvable

---


### CesAlarmruleConditionOutputReference <a name="CesAlarmruleConditionOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleConditionOutputReference;

new CesAlarmruleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleConditionOutputReference.property.internalValue"></a>

```java
public CesAlarmruleCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleCondition">CesAlarmruleCondition</a>

---


### CesAlarmruleMetricDimensionsList <a name="CesAlarmruleMetricDimensionsList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleMetricDimensionsList;

new CesAlarmruleMetricDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.get"></a>

```java
public CesAlarmruleMetricDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>>

---


### CesAlarmruleMetricDimensionsOutputReference <a name="CesAlarmruleMetricDimensionsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleMetricDimensionsOutputReference;

new CesAlarmruleMetricDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a> OR com.hashicorp.cdktf.IResolvable

---


### CesAlarmruleMetricOutputReference <a name="CesAlarmruleMetricOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleMetricOutputReference;

new CesAlarmruleMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.putDimensions">putDimensions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<CesAlarmruleMetricDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList">CesAlarmruleMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensions"></a>

```java
public CesAlarmruleMetricDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensionsList">CesAlarmruleMetricDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricDimensions">CesAlarmruleMetricDimensions</a>>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetricOutputReference.property.internalValue"></a>

```java
public CesAlarmruleMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleMetric">CesAlarmruleMetric</a>

---


### CesAlarmruleOkActionsList <a name="CesAlarmruleOkActionsList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleOkActionsList;

new CesAlarmruleOkActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.get"></a>

```java
public CesAlarmruleOkActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a>>

---


### CesAlarmruleOkActionsOutputReference <a name="CesAlarmruleOkActionsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleOkActionsOutputReference;

new CesAlarmruleOkActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationListInput">notificationListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationList">notificationList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationListInput`<sup>Optional</sup> <a name="notificationListInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationListInput"></a>

```java
public java.util.List<java.lang.String> getNotificationListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `notificationList`<sup>Required</sup> <a name="notificationList" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.notificationList"></a>

```java
public java.util.List<java.lang.String> getNotificationList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleOkActions">CesAlarmruleOkActions</a> OR com.hashicorp.cdktf.IResolvable

---


### CesAlarmruleTimeoutsOutputReference <a name="CesAlarmruleTimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_alarmrule.CesAlarmruleTimeoutsOutputReference;

new CesAlarmruleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesAlarmrule.CesAlarmruleTimeouts">CesAlarmruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



