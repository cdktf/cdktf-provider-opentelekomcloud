# `dataOpentelekomcloudRmsAdvancedQueryV1` Submodule <a name="`dataOpentelekomcloudRmsAdvancedQueryV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRmsAdvancedQueryV1 <a name="DataOpentelekomcloudRmsAdvancedQueryV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_advanced_query_v1 opentelekomcloud_rms_advanced_query_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

dataopentelekomcloudrmsadvancedqueryv1.NewDataOpentelekomcloudRmsAdvancedQueryV1(scope Construct, id *string, config DataOpentelekomcloudRmsAdvancedQueryV1Config) DataOpentelekomcloudRmsAdvancedQueryV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config">DataOpentelekomcloudRmsAdvancedQueryV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config">DataOpentelekomcloudRmsAdvancedQueryV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRmsAdvancedQueryV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

dataopentelekomcloudrmsadvancedqueryv1.DataOpentelekomcloudRmsAdvancedQueryV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

dataopentelekomcloudrmsadvancedqueryv1.DataOpentelekomcloudRmsAdvancedQueryV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

dataopentelekomcloudrmsadvancedqueryv1.DataOpentelekomcloudRmsAdvancedQueryV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

dataopentelekomcloudrmsadvancedqueryv1.DataOpentelekomcloudRmsAdvancedQueryV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudRmsAdvancedQueryV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudRmsAdvancedQueryV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudRmsAdvancedQueryV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_advanced_query_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRmsAdvancedQueryV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.queryInfo">QueryInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList">DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.results">Results</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `QueryInfo`<sup>Required</sup> <a name="QueryInfo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.queryInfo"></a>

```go
func QueryInfo() DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList">DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList</a>

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.results"></a>

```go
func Results() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRmsAdvancedQueryV1Config <a name="DataOpentelekomcloudRmsAdvancedQueryV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

&dataopentelekomcloudrmsadvancedqueryv1.DataOpentelekomcloudRmsAdvancedQueryV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Expression: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_advanced_query_v1#expression DataOpentelekomcloudRmsAdvancedQueryV1#expression}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_advanced_query_v1#id DataOpentelekomcloudRmsAdvancedQueryV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_advanced_query_v1#expression DataOpentelekomcloudRmsAdvancedQueryV1#expression}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/rms_advanced_query_v1#id DataOpentelekomcloudRmsAdvancedQueryV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo <a name="DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

&dataopentelekomcloudrmsadvancedqueryv1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList <a name="DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

dataopentelekomcloudrmsadvancedqueryv1.NewDataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference <a name="DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmsadvancedqueryv1"

dataopentelekomcloudrmsadvancedqueryv1.NewDataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.selectFields">SelectFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo">DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SelectFields`<sup>Required</sup> <a name="SelectFields" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.selectFields"></a>

```go
func SelectFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsAdvancedQueryV1.DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo">DataOpentelekomcloudRmsAdvancedQueryV1QueryInfo</a>

---



