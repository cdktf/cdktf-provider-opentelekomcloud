# `dataOpentelekomcloudCesMetricDataV1` Submodule <a name="`dataOpentelekomcloudCesMetricDataV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesMetricDataV1 <a name="DataOpentelekomcloudCesMetricDataV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1 opentelekomcloud_ces_metric_data_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

dataopentelekomcloudcesmetricdatav1.NewDataOpentelekomcloudCesMetricDataV1(scope Construct, id *string, config DataOpentelekomcloudCesMetricDataV1Config) DataOpentelekomcloudCesMetricDataV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config">DataOpentelekomcloudCesMetricDataV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config">DataOpentelekomcloudCesMetricDataV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetDim1">ResetDim1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDim1` <a name="ResetDim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetDim1"></a>

```go
func ResetDim1()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesMetricDataV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

dataopentelekomcloudcesmetricdatav1.DataOpentelekomcloudCesMetricDataV1_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

dataopentelekomcloudcesmetricdatav1.DataOpentelekomcloudCesMetricDataV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

dataopentelekomcloudcesmetricdatav1.DataOpentelekomcloudCesMetricDataV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

dataopentelekomcloudcesmetricdatav1.DataOpentelekomcloudCesMetricDataV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudCesMetricDataV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudCesMetricDataV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudCesMetricDataV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesMetricDataV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.datapoints">Datapoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList">DataOpentelekomcloudCesMetricDataV1DatapointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0Input">Dim0Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1Input">Dim1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0">Dim0</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1">Dim1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.to">To</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Datapoints`<sup>Required</sup> <a name="Datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.datapoints"></a>

```go
func Datapoints() DataOpentelekomcloudCesMetricDataV1DatapointsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList">DataOpentelekomcloudCesMetricDataV1DatapointsList</a>

---

##### `Dim0Input`<sup>Optional</sup> <a name="Dim0Input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0Input"></a>

```go
func Dim0Input() *string
```

- *Type:* *string

---

##### `Dim1Input`<sup>Optional</sup> <a name="Dim1Input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1Input"></a>

```go
func Dim1Input() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `Dim0`<sup>Required</sup> <a name="Dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim0"></a>

```go
func Dim0() *string
```

- *Type:* *string

---

##### `Dim1`<sup>Required</sup> <a name="Dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.dim1"></a>

```go
func Dim1() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesMetricDataV1Config <a name="DataOpentelekomcloudCesMetricDataV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

&dataopentelekomcloudcesmetricdatav1.DataOpentelekomcloudCesMetricDataV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dim0: *string,
	Filter: *string,
	From: *string,
	MetricName: *string,
	Namespace: *string,
	Period: *f64,
	To: *string,
	Dim1: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim0">Dim0</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.period">Period</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim1">Dim1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dim0`<sup>Required</sup> <a name="Dim0" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim0"></a>

```go
Dim0 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#dim0 DataOpentelekomcloudCesMetricDataV1#dim0}.

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#filter DataOpentelekomcloudCesMetricDataV1#filter}.

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#from DataOpentelekomcloudCesMetricDataV1#from}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#metric_name DataOpentelekomcloudCesMetricDataV1#metric_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#namespace DataOpentelekomcloudCesMetricDataV1#namespace}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#period DataOpentelekomcloudCesMetricDataV1#period}.

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#to DataOpentelekomcloudCesMetricDataV1#to}.

---

##### `Dim1`<sup>Optional</sup> <a name="Dim1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.dim1"></a>

```go
Dim1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#dim1 DataOpentelekomcloudCesMetricDataV1#dim1}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/ces_metric_data_v1#id DataOpentelekomcloudCesMetricDataV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudCesMetricDataV1Datapoints <a name="DataOpentelekomcloudCesMetricDataV1Datapoints" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

&dataopentelekomcloudcesmetricdatav1.DataOpentelekomcloudCesMetricDataV1Datapoints {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesMetricDataV1DatapointsList <a name="DataOpentelekomcloudCesMetricDataV1DatapointsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

dataopentelekomcloudcesmetricdatav1.NewDataOpentelekomcloudCesMetricDataV1DatapointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudCesMetricDataV1DatapointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference <a name="DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcesmetricdatav1"

dataopentelekomcloudcesmetricdatav1.NewDataOpentelekomcloudCesMetricDataV1DatapointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.average">Average</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.sum">Sum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.timestamp">Timestamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.variance">Variance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints">DataOpentelekomcloudCesMetricDataV1Datapoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Average`<sup>Required</sup> <a name="Average" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.average"></a>

```go
func Average() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Sum`<sup>Required</sup> <a name="Sum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.sum"></a>

```go
func Sum() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.timestamp"></a>

```go
func Timestamp() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Variance`<sup>Required</sup> <a name="Variance" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.variance"></a>

```go
func Variance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1DatapointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudCesMetricDataV1Datapoints
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesMetricDataV1.DataOpentelekomcloudCesMetricDataV1Datapoints">DataOpentelekomcloudCesMetricDataV1Datapoints</a>

---



