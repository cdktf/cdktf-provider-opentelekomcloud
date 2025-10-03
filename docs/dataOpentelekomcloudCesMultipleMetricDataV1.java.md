# `dataOpentelekomcloudCesMultipleMetricDataV1` Submodule <a name="`dataOpentelekomcloudCesMultipleMetricDataV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesMultipleMetricDataV1 <a name="DataOpentelekomcloudCesMultipleMetricDataV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1 opentelekomcloud_ces_multiple_metric_data_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1;

DataOpentelekomcloudCesMultipleMetricDataV1.Builder.create(Construct scope, java.lang.String id)
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
    .filter(java.lang.String)
    .from(java.lang.Number)
    .metrics(IResolvable)
    .metrics(java.util.List<DataOpentelekomcloudCesMultipleMetricDataV1Metrics>)
    .period(java.lang.String)
    .to(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.from">from</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.metrics">metrics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>></code> | metrics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.to">to</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.from"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}.

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.metrics"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#metrics DataOpentelekomcloudCesMultipleMetricDataV1#metrics}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.period"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.to"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetrics` <a name="putMetrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.putMetrics"></a>

```java
public void putMetrics(IResolvable OR java.util.List<DataOpentelekomcloudCesMultipleMetricDataV1Metrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.putMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesMultipleMetricDataV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1;

DataOpentelekomcloudCesMultipleMetricDataV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1;

DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1;

DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1;

DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesMultipleMetricDataV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOpentelekomcloudCesMultipleMetricDataV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOpentelekomcloudCesMultipleMetricDataV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesMultipleMetricDataV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fromInput">fromInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metricsInput">metricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.toInput">toInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.from">from</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.to">to</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metrics"></a>

```java
public DataOpentelekomcloudCesMultipleMetricDataV1MetricsList getMetrics();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.fromInput"></a>

```java
public java.lang.Number getFromInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.metricsInput"></a>

```java
public java.lang.Object getMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.toInput"></a>

```java
public java.lang.Number getToInput();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.from"></a>

```java
public java.lang.Number getFrom();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.to"></a>

```java
public java.lang.Number getTo();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesMultipleMetricDataV1Config <a name="DataOpentelekomcloudCesMultipleMetricDataV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1Config;

DataOpentelekomcloudCesMultipleMetricDataV1Config.builder()
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
    .filter(java.lang.String)
    .from(java.lang.Number)
    .metrics(IResolvable)
    .metrics(java.util.List<DataOpentelekomcloudCesMultipleMetricDataV1Metrics>)
    .period(java.lang.String)
    .to(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.from">from</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.metrics">metrics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>></code> | metrics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.to">to</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#filter DataOpentelekomcloudCesMultipleMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.from"></a>

```java
public java.lang.Number getFrom();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#from DataOpentelekomcloudCesMultipleMetricDataV1#from}.

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.metrics"></a>

```java
public java.lang.Object getMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#metrics DataOpentelekomcloudCesMultipleMetricDataV1#metrics}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#period DataOpentelekomcloudCesMultipleMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.to"></a>

```java
public java.lang.Number getTo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#to DataOpentelekomcloudCesMultipleMetricDataV1#to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#id DataOpentelekomcloudCesMultipleMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudCesMultipleMetricDataV1Metrics <a name="DataOpentelekomcloudCesMultipleMetricDataV1Metrics" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics;

DataOpentelekomcloudCesMultipleMetricDataV1Metrics.builder()
    .dimensions(IResolvable)
    .dimensions(java.util.List<DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions>)
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#metric_name DataOpentelekomcloudCesMultipleMetricDataV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#namespace DataOpentelekomcloudCesMultipleMetricDataV1#namespace}. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#dimensions DataOpentelekomcloudCesMultipleMetricDataV1#dimensions}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#metric_name DataOpentelekomcloudCesMultipleMetricDataV1#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#namespace DataOpentelekomcloudCesMultipleMetricDataV1#namespace}.

---

### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints;

DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints.builder()
    .build();
```


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions;

DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#name DataOpentelekomcloudCesMultipleMetricDataV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#value DataOpentelekomcloudCesMultipleMetricDataV1#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#name DataOpentelekomcloudCesMultipleMetricDataV1#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/ces_multiple_metric_data_v1#value DataOpentelekomcloudCesMultipleMetricDataV1#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList;

new DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.get"></a>

```java
public DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference;

new DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.average">average</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.sum">sum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.variance">variance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `average`<sup>Required</sup> <a name="average" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.average"></a>

```java
public java.lang.Number getAverage();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `sum`<sup>Required</sup> <a name="sum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.sum"></a>

```java
public java.lang.Number getSum();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.timestamp"></a>

```java
public java.lang.Number getTimestamp();
```

- *Type:* java.lang.Number

---

##### `variance`<sup>Required</sup> <a name="variance" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.variance"></a>

```java
public java.lang.Number getVariance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsOutputReference.property.internalValue"></a>

```java
public DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapoints</a>

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList;

new DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.get"></a>

```java
public DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>>

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference;

new DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsList <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList;

new DataOpentelekomcloudCesMultipleMetricDataV1MetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.get"></a>

```java
public DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>>

---


### DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference <a name="DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_multiple_metric_data_v1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference;

new DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.putDimensions">putDimensions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.datapoints">datapoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datapoints`<sup>Required</sup> <a name="datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.datapoints"></a>

```java
public DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList getDatapoints();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDatapointsList</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensions"></a>

```java
public DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensionsList</a>

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions">DataOpentelekomcloudCesMultipleMetricDataV1MetricsDimensions</a>>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1MetricsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMultipleMetricDataV1.DataOpentelekomcloudCesMultipleMetricDataV1Metrics">DataOpentelekomcloudCesMultipleMetricDataV1Metrics</a>

---



