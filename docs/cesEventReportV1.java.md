# `cesEventReportV1` Submodule <a name="`cesEventReportV1` Submodule" id="@cdktf/provider-opentelekomcloud.cesEventReportV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesEventReportV1 <a name="CesEventReportV1" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1 opentelekomcloud_ces_event_report_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1;

CesEventReportV1.Builder.create(Construct scope, java.lang.String id)
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
    .detail(CesEventReportV1Detail)
    .eventName(java.lang.String)
    .eventSource(java.lang.String)
    .time(java.lang.Number)
//  .id(java.lang.String)
//  .timeouts(CesEventReportV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.detail">detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | detail block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventName">eventName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventSource">eventSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.time">time</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#time CesEventReportV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#id CesEventReportV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.detail"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#detail CesEventReportV1#detail}

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}.

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.eventSource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.time"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#time CesEventReportV1#time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#id CesEventReportV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#timeouts CesEventReportV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail">putDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetail` <a name="putDetail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail"></a>

```java
public void putDetail(CesEventReportV1Detail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putTimeouts"></a>

```java
public void putTimeouts(CesEventReportV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CesEventReportV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1;

CesEventReportV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1;

CesEventReportV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1;

CesEventReportV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1;

CesEventReportV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CesEventReportV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CesEventReportV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CesEventReportV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CesEventReportV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CesEventReportV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detail">detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference">CesEventReportV1DetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventId">eventId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference">CesEventReportV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detailInput">detailInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventNameInput">eventNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSourceInput">eventSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeInput">timeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventName">eventName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSource">eventSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.time">time</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detail"></a>

```java
public CesEventReportV1DetailOutputReference getDetail();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference">CesEventReportV1DetailOutputReference</a>

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventId"></a>

```java
public java.lang.String getEventId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeouts"></a>

```java
public CesEventReportV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference">CesEventReportV1TimeoutsOutputReference</a>

---

##### `detailInput`<sup>Optional</sup> <a name="detailInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.detailInput"></a>

```java
public CesEventReportV1Detail getDetailInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

---

##### `eventNameInput`<sup>Optional</sup> <a name="eventNameInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventNameInput"></a>

```java
public java.lang.String getEventNameInput();
```

- *Type:* java.lang.String

---

##### `eventSourceInput`<sup>Optional</sup> <a name="eventSourceInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSourceInput"></a>

```java
public java.lang.String getEventSourceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeInput"></a>

```java
public java.lang.Number getTimeInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventName"></a>

```java
public java.lang.String getEventName();
```

- *Type:* java.lang.String

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.eventSource"></a>

```java
public java.lang.String getEventSource();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.time"></a>

```java
public java.lang.Number getTime();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CesEventReportV1Config <a name="CesEventReportV1Config" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1Config;

CesEventReportV1Config.builder()
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
    .detail(CesEventReportV1Detail)
    .eventName(java.lang.String)
    .eventSource(java.lang.String)
    .time(java.lang.Number)
//  .id(java.lang.String)
//  .timeouts(CesEventReportV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.detail">detail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | detail block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventName">eventName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventSource">eventSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.time">time</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#time CesEventReportV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#id CesEventReportV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.detail"></a>

```java
public CesEventReportV1Detail getDetail();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#detail CesEventReportV1#detail}

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventName"></a>

```java
public java.lang.String getEventName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}.

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.eventSource"></a>

```java
public java.lang.String getEventSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.time"></a>

```java
public java.lang.Number getTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#time CesEventReportV1#time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#id CesEventReportV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Config.property.timeouts"></a>

```java
public CesEventReportV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#timeouts CesEventReportV1#timeouts}

---

### CesEventReportV1Detail <a name="CesEventReportV1Detail" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1Detail;

CesEventReportV1Detail.builder()
//  .content(java.lang.String)
//  .eventLevel(java.lang.String)
//  .eventState(java.lang.String)
//  .eventType(java.lang.String)
//  .eventUser(java.lang.String)
//  .groupId(java.lang.String)
//  .resourceId(java.lang.String)
//  .resourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#content CesEventReportV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventLevel">eventLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_level CesEventReportV1#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventState">eventState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_state CesEventReportV1#event_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventType">eventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_type CesEventReportV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventUser">eventUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_user CesEventReportV1#event_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#group_id CesEventReportV1#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#resource_id CesEventReportV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#resource_name CesEventReportV1#resource_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#content CesEventReportV1#content}.

---

##### `eventLevel`<sup>Optional</sup> <a name="eventLevel" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventLevel"></a>

```java
public java.lang.String getEventLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_level CesEventReportV1#event_level}.

---

##### `eventState`<sup>Optional</sup> <a name="eventState" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventState"></a>

```java
public java.lang.String getEventState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_state CesEventReportV1#event_state}.

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_type CesEventReportV1#event_type}.

---

##### `eventUser`<sup>Optional</sup> <a name="eventUser" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.eventUser"></a>

```java
public java.lang.String getEventUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#event_user CesEventReportV1#event_user}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#group_id CesEventReportV1#group_id}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#resource_id CesEventReportV1#resource_id}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#resource_name CesEventReportV1#resource_name}.

---

### CesEventReportV1Timeouts <a name="CesEventReportV1Timeouts" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1Timeouts;

CesEventReportV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#create CesEventReportV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#delete CesEventReportV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#create CesEventReportV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/ces_event_report_v1#delete CesEventReportV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesEventReportV1DetailOutputReference <a name="CesEventReportV1DetailOutputReference" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1DetailOutputReference;

new CesEventReportV1DetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventLevel">resetEventLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventState">resetEventState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventUser">resetEventUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetEventLevel` <a name="resetEventLevel" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventLevel"></a>

```java
public void resetEventLevel()
```

##### `resetEventState` <a name="resetEventState" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventState"></a>

```java
public void resetEventState()
```

##### `resetEventType` <a name="resetEventType" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventType"></a>

```java
public void resetEventType()
```

##### `resetEventUser` <a name="resetEventUser" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetEventUser"></a>

```java
public void resetEventUser()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.resetResourceName"></a>

```java
public void resetResourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevelInput">eventLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventStateInput">eventStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUserInput">eventUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevel">eventLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventState">eventState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUser">eventUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `eventLevelInput`<sup>Optional</sup> <a name="eventLevelInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevelInput"></a>

```java
public java.lang.String getEventLevelInput();
```

- *Type:* java.lang.String

---

##### `eventStateInput`<sup>Optional</sup> <a name="eventStateInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventStateInput"></a>

```java
public java.lang.String getEventStateInput();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `eventUserInput`<sup>Optional</sup> <a name="eventUserInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUserInput"></a>

```java
public java.lang.String getEventUserInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `eventLevel`<sup>Required</sup> <a name="eventLevel" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventLevel"></a>

```java
public java.lang.String getEventLevel();
```

- *Type:* java.lang.String

---

##### `eventState`<sup>Required</sup> <a name="eventState" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventState"></a>

```java
public java.lang.String getEventState();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `eventUser`<sup>Required</sup> <a name="eventUser" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.eventUser"></a>

```java
public java.lang.String getEventUser();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1DetailOutputReference.property.internalValue"></a>

```java
public CesEventReportV1Detail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Detail">CesEventReportV1Detail</a>

---


### CesEventReportV1TimeoutsOutputReference <a name="CesEventReportV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ces_event_report_v1.CesEventReportV1TimeoutsOutputReference;

new CesEventReportV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cesEventReportV1.CesEventReportV1Timeouts">CesEventReportV1Timeouts</a>

---



