# `dataOpentelekomcloudCesMetricDataV1` Submodule <a name="`dataOpentelekomcloudCesMetricDataV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesMetricDataV1 <a name="DataOpentelekomcloudCesMetricDataV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1 opentelekomcloud_ces_metric_data_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1;

DataOpentelekomcloudCesMetricDataV1.Builder.create(Construct scope, java.lang.String id)
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
    .dim0(java.lang.String)
    .filter(java.lang.String)
    .from(java.lang.String)
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .period(java.lang.Number)
    .to(java.lang.String)
//  .dim1(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim0">dim0</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim1">dim1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dim0`<sup>Required</sup> <a name="dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim0"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.from"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.to"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}.

---

##### `dim1`<sup>Optional</sup> <a name="dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.dim1"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetDim1">resetDim1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDim1` <a name="resetDim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetDim1"></a>

```java
public void resetDim1()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesMetricDataV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1;

DataOpentelekomcloudCesMetricDataV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1;

DataOpentelekomcloudCesMetricDataV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1;

DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1;

DataOpentelekomcloudCesMetricDataV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOpentelekomcloudCesMetricDataV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesMetricDataV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOpentelekomcloudCesMetricDataV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOpentelekomcloudCesMetricDataV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesMetricDataV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.datapoints">datapoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList">DataOpentelekomcloudCesMetricDataV1DatapointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0Input">dim0Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1Input">dim1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0">dim0</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1">dim1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `datapoints`<sup>Required</sup> <a name="datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.datapoints"></a>

```java
public DataOpentelekomcloudCesMetricDataV1DatapointsList getDatapoints();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList">DataOpentelekomcloudCesMetricDataV1DatapointsList</a>

---

##### `dim0Input`<sup>Optional</sup> <a name="dim0Input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0Input"></a>

```java
public java.lang.String getDim0Input();
```

- *Type:* java.lang.String

---

##### `dim1Input`<sup>Optional</sup> <a name="dim1Input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1Input"></a>

```java
public java.lang.String getDim1Input();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `dim0`<sup>Required</sup> <a name="dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0"></a>

```java
public java.lang.String getDim0();
```

- *Type:* java.lang.String

---

##### `dim1`<sup>Required</sup> <a name="dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1"></a>

```java
public java.lang.String getDim1();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesMetricDataV1Config <a name="DataOpentelekomcloudCesMetricDataV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1Config;

DataOpentelekomcloudCesMetricDataV1Config.builder()
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
    .dim0(java.lang.String)
    .filter(java.lang.String)
    .from(java.lang.String)
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .period(java.lang.Number)
    .to(java.lang.String)
//  .dim1(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim0">dim0</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim1">dim1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dim0`<sup>Required</sup> <a name="dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim0"></a>

```java
public java.lang.String getDim0();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}.

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}.

---

##### `dim1`<sup>Optional</sup> <a name="dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim1"></a>

```java
public java.lang.String getDim1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudCesMetricDataV1Datapoints <a name="DataOpentelekomcloudCesMetricDataV1Datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1Datapoints;

DataOpentelekomcloudCesMetricDataV1Datapoints.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesMetricDataV1DatapointsList <a name="DataOpentelekomcloudCesMetricDataV1DatapointsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1DatapointsList;

new DataOpentelekomcloudCesMetricDataV1DatapointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get"></a>

```java
public DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference <a name="DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_ces_metric_data_v1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference;

new DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.average">average</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.sum">sum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.variance">variance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints">DataOpentelekomcloudCesMetricDataV1Datapoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `average`<sup>Required</sup> <a name="average" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.average"></a>

```java
public java.lang.Number getAverage();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `sum`<sup>Required</sup> <a name="sum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.sum"></a>

```java
public java.lang.Number getSum();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.timestamp"></a>

```java
public java.lang.Number getTimestamp();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `variance`<sup>Required</sup> <a name="variance" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.variance"></a>

```java
public java.lang.Number getVariance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.internalValue"></a>

```java
public DataOpentelekomcloudCesMetricDataV1Datapoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints">DataOpentelekomcloudCesMetricDataV1Datapoints</a>

---



